export const Timer = (
  callback: () => void,
  timing: number = 5000
) => {
  const start = Date.now()
  let timerId, remainder

  const pause = () => {
    window.clearTimeout(timerId)
    remainder = (Date.now() - start) / 1000
  }

  const resume = () => {
    const timeout = remainder ?? timing
    timerId = window.setTimeout(callback, timeout)
  }

  resume()

  return {
    pause,
    resume
  }
}