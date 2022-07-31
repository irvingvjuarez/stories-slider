import { STORY_TIMING } from "@app/globals"

export class Timer {
  static id: number | null
  static timing: number = STORY_TIMING
  static start: number
  static callback: () => void

  constructor(callback: () => void){
    Timer.callback = callback
  }

  static resume(firstLoad?: boolean) {
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
      let timeRemaining = Timer.timing - (Date.now() - Timer.start)
      console.log({ timeRemaining, id: Timer.id })

      Timer.timing = Timer.timing <= 0 ? STORY_TIMING : timeRemaining
      setTimeout(() => Timer.id = null, 0)
    }
  }
}