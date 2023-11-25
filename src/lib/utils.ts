export const viewTransition = (fn: Function, params?: any) => {
  if ('startViewTransition' in document) {
    // @ts-ignore
    document.startViewTransition(() => fn(params))
  } else {
    fn(params)
  }
}
