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
      if(firstLoad){
        // Timer.timing = STORY_TIMING
        Timer.start = Date.now()
      }

      console.log({ id: Timer.id })
    }
  }

  static pause(){
    if(Timer.id){
      console.log("Pause")
      window.clearTimeout(Timer.id)
      let timeRemaining = Timer.timing < STORY_TIMING ? Timer.timing - (STORY_TIMING - Timer.timing) : Timer.timing - (Date.now() - Timer.start)
      console.log({ timeRemaining })

      Timer.timing = Timer.timing <= 0 ? STORY_TIMING : timeRemaining
      setTimeout(() => Timer.id = null, 0)

      // console.log({
      //   timing: Timer.timing,
      //   id: Timer.id,
      // })
    }
  }
}