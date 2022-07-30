export class Timer {
  static id: number | null
  static timing: number = 5000
  static start: number
  static callback: () => void

  constructor(callback: () => void){
    Timer.callback = callback
  }

  static resume() {
    if(!Timer.id){
      console.log("Resume")
      Timer.id = window.setTimeout(this.callback, Timer.timing)
      Timer.start = Date.now()

      console.log({ id: Timer.id })
    }
  }

  static pause(){
    if(Timer.id){
      console.log("Pause")
      window.clearTimeout(Timer.id)
      Timer.timing -= Date.now() - Timer.start
      setTimeout(() => Timer.id = null, 1000)

      console.log({
        timing: Timer.timing,
        id: Timer.id
      })
    }
  }
}