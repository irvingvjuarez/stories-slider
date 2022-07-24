export const setOverflowHidden = (element: string) => {
  const el = document.querySelector(element) as HTMLDivElement
  el.classList.add("toHidden")
}