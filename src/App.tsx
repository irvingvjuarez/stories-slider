import { Header } from "@app/components/Header"
import { Stories } from "@app/containers/Stories"
import { ContentMedia } from "@app/containers/ContentMedia"

function App() {
  return (
    <div className="App h-auto min-h-screen w-screen bg-black">
      <section className="w-full max-w-[900px] mx-auto h-full">
        <Header />
        <Stories />
        <ContentMedia />
      </section>
    </div>
  )
}

export default App
