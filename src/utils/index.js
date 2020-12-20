export const setLocalStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  return window.localStorage.setItem(name, content)
}

export const getLocalStore = (name) => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}

export const LocalStoreRemoveItem = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}

export const isValidEmail = (e) => {
  return !(e && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,64}$/i.test(e))
}
