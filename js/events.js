export default function Events({
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
}) {
  lightMode.addEventListener('click', function () {
    controls.changeToDarkMode()
  })

  darkMode.addEventListener('click', function () {
    controls.changeToLightMode()
  })

  buttonPlay.addEventListener('click', function () {
    sound.pressButton()
    timer.countdown()
    controls.play()
  })

  buttonPause.addEventListener('click', function () {
    sound.pressButton()
    controls.pause()
    timer.hold()
  })

  buttonSet.addEventListener('click', function () {
    sound.pressButton()
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonStop.addEventListener('click', function () {
    sound.pressButton()
    controls.stopAndReset()
    timer.reset()
  })

  buttonPlus.addEventListener('click', function () {
    timer.plusFiveMinutes()
  })

  buttonLess.addEventListener('click', function () {
    timer.lessFiveMinutes()
  })

  buttonForest.addEventListener('click', function (event) {
    const cardSoundForestSelected = buttonForest.classList.contains('focus')

    if (cardSoundForestSelected) {
      controls.stopAudios()
      controls.removeFocusOnCards()
    } else {
      controls.stopAudios()
      controls.removeFocusOnCards()
      controls.volume()
      sound.bgForestAudio.play()
      buttonForest.classList.add('focus')
      inputVolumeForest.classList.add('focus')
    }
  })

  buttonRain.addEventListener('click', function () {
    const cardSoundRainSelected = buttonRain.classList.contains('focus')

    if (cardSoundRainSelected) {
      controls.stopAudios()
      controls.removeFocusOnCards()
    } else {
      controls.stopAudios()
      controls.removeFocusOnCards()
      sound.bgRainAudio.play()
      buttonRain.classList.add('focus')
      inputVolumeRain.classList.add('focus')
    }
  })

  buttonCoffeeshop.addEventListener('click', function () {
    const cardSoundCoffeeshopSelected =
      buttonCoffeeshop.classList.contains('focus')

    if (cardSoundCoffeeshopSelected) {
      controls.stopAudios()
      controls.removeFocusOnCards()
    } else {
      controls.stopAudios()
      controls.removeFocusOnCards()
      sound.bgCoffeeshopAudio.play()
      buttonCoffeeshop.classList.add('focus')
      inputVolumeCoffeeshop.classList.add('focus')
    }
  })

  buttonFireplace.addEventListener('click', function () {
    const cardSoundFireplaceSelected =
      buttonFireplace.classList.contains('focus')

    if (cardSoundFireplaceSelected) {
      controls.stopAudios()
      controls.removeFocusOnCards()
    } else {
      controls.stopAudios()
      controls.removeFocusOnCards()
      sound.bgFireplaceAudio.play()
      buttonFireplace.classList.add('focus')
      inputVolumeFireplace.classList.add('focus')
    }
  })
}
