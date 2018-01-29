export function debounce(fc, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fc.apply(this, args)
    }, delay)
  }
}
