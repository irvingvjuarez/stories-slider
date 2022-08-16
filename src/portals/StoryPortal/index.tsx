import React from "react"
import { StoriesHover } from "@app/containers/StoriesHover"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { useStoryPause } from "@app/hooks/useStoryPause"

const StoryPortal: React.FC = (): JSX.Element => {
  const { storiesStateInitialValue } = useStoryPause()

  return(
    <StoriesContext.Provider value={storiesStateInitialValue as IStoriesContext}>
      <section className="fixed top-0 w-full h-screen bg-black">
        <StoriesHover />
      </section>
    </StoriesContext.Provider>
  )
}

export { StoryPortal }