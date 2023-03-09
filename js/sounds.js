export default function Sound() {
  const bgForestAudio = new Audio('/sounds/forest.wav')
  const bgRainAudio = new Audio('/sounds/rain.wav')
  const bgCoffeeshopAudio = new Audio('/sounds/coffeeshop.wav')
  const bgFireplaceAudio = new Audio('/sounds/fireplace.wav')
  const buttonPressAudio = new Audio('/sounds/button-press.wav')
  const kitchenTimer = new Audio('/sounds/kichen-timer.wav')

  bgForestAudio.loop = true
  bgRainAudio.loop = true
  bgCoffeeshopAudio.loop = true
  bgFireplaceAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    bgForestAudio,
    bgRainAudio,
    bgCoffeeshopAudio,
    bgFireplaceAudio,
    pressButton,
    timeEnd
  }
}
