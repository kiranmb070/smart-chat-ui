import React from "react"
import { MobXProviderContext } from "mobx-react"
import { IRootStore } from "./index"

export default function useStores() {
  return React.useContext(MobXProviderContext) as IRootStore
}
