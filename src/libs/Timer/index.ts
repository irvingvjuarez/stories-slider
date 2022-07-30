export class Timer {
  static id: number | null
  static timing: number = 5000
  static start: number

  static resume(callback: () => void) {
    if(!Timer.id){
      console.log("Resume")
      Timer.id = window.setTimeout(callback, Timer.timing)
      Timer.start = Date.now()

      console.log({ id: Timer.id })
    }
  }

  static pause(){
    if(Timer.id){
      console.log("Pause")
      window.clearTimeout(Timer.id)
      Timer.timing = Date.now() - Timer.start

      console.log({
        timing: Timer.timing,
        id: Timer.id
      })
    }
  }
}
// export const Timer = (
//   callback: () => void,
//   timing: number = 5000
// ) => {
//   const start = Date.now()
//   let remainder: number

//   const pause = (timerId: any) => {
//     console.log("Pause")

//     clearTimeout(timerId)
//     remainder = Math.abs(Date.now() - start - timing)
//     console.log({
//       remainder,
//     })
//   }

//   const resume = () => {
//     console.log("Resume")
//     const timeout = remainder ?? timing
//     const timerId = setTimeout(callback, timeout)

//     console.log({
//       timeout,
//       timerId
//     })
//   }

//   resume()

//   return {
//     pause,
//     resume
//   }
// }