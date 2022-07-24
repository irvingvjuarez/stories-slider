export const toggleOverflowHidden = (element: string) => {
  const el = document.querySelector(element) as HTMLDivElement
  el.classList.toggle("toHidden")
}