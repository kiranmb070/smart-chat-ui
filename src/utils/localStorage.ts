type GetFlagKeys = ""
type GetKeys = GetFlagKeys | "accessToken"

type SetFlagKeys = ""
type SetKeys = SetFlagKeys | "accessToken"

const LocalStorage = {
  setFlag(key: SetFlagKeys) {
    this.set(key, "true")
  },

  isFlagSet(key: GetFlagKeys) {
    return this.get(key) === "true"
  },

  get(key: GetKeys) {
    try {
      return localStorage.getItem(key)
    } catch (err) {
      return null
    }
  },

  set(key: SetKeys, value: string) {
    try {
      localStorage.setItem(key, value)
    } catch (err) {}
  },

  remove(key: string) {
    try {
      localStorage.removeItem(key)
    } catch (err) {}
  },
}

export default LocalStorage
