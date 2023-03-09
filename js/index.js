import Sound from './sounds.js'
import Controls from './controls.js'
import Events from './events.js'
import Timer from './timer.js'
import {
  pageColor,
  lightMode,
  darkMode,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  buttonDarkControls,
  buttonDarkClimate,
  inputVolumeForest,
  inputVolumeRain,
  inputVolumeCoffeeshop,
  inputVolumeFireplace
} from './elements.js'

const sound = Sound()

const controls = Controls({
  pageColor,
  lightMode,
  darkMode,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  buttonDarkControls,
  buttonDarkClimate,
  inputVolumeForest,
  inputVolumeRain,
  inputVolumeCoffeeshop,
  inputVolumeFireplace,
  sound
})

let timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound
})

Events({
  lightMode,
  darkMode,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonPlus,
  buttonLess,
  buttonForest,
  buttonRain,
  buttonCoffeeshop,
  buttonFireplace,
  inputVolumeForest,
  inputVolumeRain,
  inputVolumeCoffeeshop,
  inputVolumeFireplace,
  controls,
  sound,
  timer
})
