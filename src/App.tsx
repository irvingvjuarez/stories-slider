import { Header } from "@app/components/Header"
import { Stories } from "@app/containers/Stories"
import { ContentMedia } from "@app/containers/ContentMedia"
import { AppContext } from "@app/contexts"
import { getInitialState } from "@app/services/getInitialState"
import { useReducer } from "react"
import { IAppContext } from "./contexts/types.interface"
import { reducerFn } from "@app/reducers"

function App() {
  const [state, dispatch] = useReducer(reducerFn, getInitialState())
  const globalState = {
    ...state,
    dispatch
  }

  return (
    <AppContext.Provider value={globalState}>
      <div className="App h-auto min-h-screen w-full bg-black">
        <section className="w-full max-w-[900px] mx-auto h-full">
          <Header />
          <Stories />
          <ContentMedia />
        </section>
      </div>
    </AppContext.Provider>
  )
}

export default App
