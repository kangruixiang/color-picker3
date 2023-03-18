import { derived, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { sineOut } from 'svelte/easing';
import { hslToHex, hexToRGB, rgbToHex, rgbToCmyk, hexToHSL, cmykToHex, hslToCMYK } from './process';


function randomValue(max: number) {
  return Math.floor(Math.random() * max)
}

function randomColor() {
  const hue = randomValue(360)
  const saturation = randomValue(100)
  const value = randomValue(100)
  const hex = hslToHex(hue, saturation, value)
  const { red, green, blue } = hexToRGB(hex)
  const { cyan, magenta, yellow, key } = hslToCMYK(hue, saturation, value)
  return { hue, saturation, value, hex, red, green, blue, cyan, magenta, yellow, key }
}

function defaultColor() {

  let properties = randomColor()

  const { subscribe, set, update } = writable(properties)
  // properties.hex = writable(hslToHex(properties.hue, properties.saturation, properties.value))

  return {
    subscribe,
    fromHex: (hex) => update((n) => {
      n.hex = hex
      const { hue, saturation, value } = hexToHSL(n.hex)
      const { red, green, blue } = hexToRGB(n.hex)
      const { cyan, magenta, yellow, key } = rgbToCmyk(red, green, blue)
      Object.assign(n, { hue, saturation, value, cyan, magenta, yellow, key, red, green, blue })
      return n
    }),
    fromRGB: (r, g, b) => update((n) => {
      n.hex = rgbToHex(r, g, b);
      const { hue, saturation, value } = hexToHSL(n.hex)
      const { cyan, magenta, yellow, key } = rgbToCmyk(r, g, b)
      Object.assign(n, { hue, saturation, value, cyan, magenta, yellow, key, red: r, green: g, blue: b })
      return n
    }),
    fromHSL: (h, s, l) => update((n) => {
      n.hex = hslToHex(h, s, l);
      const { red, green, blue } = hexToRGB(n.hex)
      const { cyan, magenta, yellow, key } = rgbToCmyk(red, green, blue)
      Object.assign(n, { hue: h, saturation: s, value: l, cyan, magenta, yellow, key, red, green, blue })
      return n
    }),
    fromCMYK: (c, m, y, k) => update((n) => {
      n.hex = cmykToHex(c, m, y, k);
      const { red, green, blue } = hexToRGB(n.hex)
      const { hue, saturation, value } = hexToHSL(n.hex)
      const { cyan, magenta, yellow, key } = rgbToCmyk(red, green, blue)
      Object.assign(n, { hue, saturation, value, cyan, magenta, yellow, key, red, green, blue })
      return n
    }),
    newColor: (color) => update((n) => {
      const { r, g, b } = color
      console.log(r, g, b)
      n.hex = rgbToHex(r, g, b);
      const { hue, saturation, value } = hexToHSL(n.hex)
      Object.assign(n, { hue, saturation, value })
      return n
    }),
    reset: () => set(properties = randomColor())
  }
}

export const mainColor = defaultColor()

export const saturation0 = derived(mainColor, $mainColor => hslToHex($mainColor.hue, 0, $mainColor.value))
export const saturation100 = derived(mainColor, $mainColor => hslToHex($mainColor.hue, 50, $mainColor.value))
export const value0 = derived(mainColor, $mainColor => hslToHex($mainColor.hue, $mainColor.saturation, 10))
export const value100 = derived(mainColor, $mainColor => hslToHex($mainColor.hue, $mainColor.saturation, 90))


export const textColor = '#d4d4d8';
export const textColorLight = '#d4d4d8';
export const textColorDark = '#11110d';