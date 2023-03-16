import { derived, writable } from 'svelte/store';
import { tweened } from 'svelte/motion';
import { sineOut } from 'svelte/easing';
import { hslToHex, hexToRGB, rgbToHex, rgbToCmyk } from './process';


function randomValue(max: number) {
  return Math.floor(Math.random() * max)
}

function createColor() {
  const { subscribe, set } = tweened({
    hue: randomValue(360),
    saturation: randomValue(100),
    value: randomValue(100),
  }, {
    duration: 200,
    easing: sineOut
  })

  return {
    subscribe,
    set,
    reset: () => {
      set({
        hue: randomValue(360),
        saturation: randomValue(100),
        value: randomValue(100)
      })
    }
  }
}



export const hsv = createColor()
export const hex = derived(hsv, $hsv => hslToHex($hsv.hue, $hsv.saturation, $hsv.value))
export const rgb = derived(hex, $hex => hexToRGB($hex))
export const cmyk = derived(rgb, $rgb => rgbToCmyk($rgb.red, $rgb.green, $rgb.blue))

export const saturation0 = derived(hsv, $hsv => hslToHex($hsv.hue, 0, $hsv.value))
export const saturation100 = derived(hsv, $hsv => hslToHex($hsv.hue, 50, $hsv.value))
export const value0 = derived(hsv, $hsv => hslToHex($hsv.hue, $hsv.saturation, 10))
export const value100 = derived(hsv, $hsv => hslToHex($hsv.hue, $hsv.saturation, 90))


export const textColor = '#d4d4d8';
export const textColorLight = '#d4d4d8';
export const textColorDark = '#11110d';