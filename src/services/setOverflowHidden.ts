export const setOverflowHidden = (element: string) => {
  document.querySelector(element)?.classList.add("hidden")
}