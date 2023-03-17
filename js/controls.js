export default function Controls({
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
}) {
  function changeToDarkMode() {
    lightMode.classList.add('hide')
    darkMode.classList.remove('hide')
    pageColor.classList.remove('bg-light')
    pageColor.classList.add('bg-dark')
    buttonDarkControls.classList.add('button-controls-dark')
    buttonDarkClimate.classList.add('button-climate-dark')

    volumeDarkMode()
  }

  function changeToLightMode() {
    lightMode.classList.remove('hide')
    darkMode.classList.add('hide')
    pageColor.classList.add('bg-light')
    pageColor.classList.remove('bg-dark')
    buttonDarkControls.classList.remove('button-controls-dark')
    buttonDarkClimate.classList.remove('button-climate-dark')

    volumeDarkMode()
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')

    if (isNaN(newMinutes)) {
      alert('Digite apenas números')
      return
    }

    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function stopAndReset() {
    buttonStop.classList.add('hide')
    buttonPause.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
  }

  function volumeDarkMode() {
    inputVolumeForest.classList.toggle('button-climate-dark')
    inputVolumeRain.classList.toggle('button-climate-dark')
    inputVolumeCoffeeshop.classList.toggle('button-climate-dark')
    inputVolumeFireplace.classList.toggle('button-climate-dark')
  }

  function volumeFocusOff() {
    inputVolumeForest.classList.remove('focus')
    inputVolumeRain.classList.remove('focus')
    inputVolumeCoffeeshop.classList.remove('focus')
    inputVolumeFireplace.classList.remove('focus')
  }

  function removeFocusOnCards() {
    buttonForest.classList.remove('focus')
    buttonRain.classList.remove('focus')
    buttonCoffeeshop.classList.remove('focus')
    buttonFireplace.classList.remove('focus')

    volumeFocusOff()
  }

  function stopAudios() {
    sound.bgForestAudio.pause()
    sound.bgRainAudio.pause()
    sound.bgCoffeeshopAudio.pause()
    sound.bgFireplaceAudio.pause()
  }

  function volumeDefault() {
    sound.bgForestAudio.volume = 0.5
    sound.bgRainAudio.volume = 0.5
    sound.bgCoffeeshopAudio.volume = 0.5
    sound.bgFireplaceAudio.volume = 0.5

    inputVolumeForest.value = 0.5
    inputVolumeRain.value = 0.5
    inputVolumeCoffeeshop.value = 0.5
    inputVolumeFireplace.value = 0.5
  }

  function volume() {
    sound.bgForestAudio.volume = inputVolumeForest.value
    sound.bgRainAudio.volume = inputVolumeRain.value
    sound.bgCoffeeshopAudio.volume = inputVolumeCoffeeshop.value
    sound.bgFireplaceAudio.volume = inputVolumeFireplace.value
  }

  return {
    changeToDarkMode,
    changeToLightMode,
    play,
    pause,
    getMinutes,
    stopAndReset,
    removeFocusOnCards,
    stopAudios,
    volumeDefault,
    volume
  }
}
