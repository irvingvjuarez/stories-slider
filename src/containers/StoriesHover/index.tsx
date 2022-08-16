import React, { useEffect } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { StoryHeader } from "@app/components/StoryHeader"
import { useStoryPause } from "@app/hooks/useStoryPause"

const StoriesHover: React.FC = (): JSX.Element => {
  const {
    currentStory,
    currentStories,
    loading,
    inPause,
    storyTransitionConfig
  } = useStoryPause()

  useEffect(() => {
    const spanElement = document.getElementById(currentStory)
    
    if(loading) spanElement?.classList.add("animation-pause")
    if(!loading) spanElement?.classList.remove("animation-pause")
  }, [loading])
  
  return(
    <section className="max-w-[900px] mx-auto h-screen flex items-center">
      <StoryImg imgUrl={currentStory}>
        <div className="absolute top-0 left-0 w-full flex flex-col items-center z-[2] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent">
          <div className="flex justify-between pt-3 space-x-1 px-1 w-[95%]">
            {currentStories.map(story => (
              <div key={story} className="w-full relative">
                <span className="story-hover"></span>
                <span className="absolute top-0 left-0 story-hover" id={story}></span>
              </div>
            ))}
          </div>

          <StoryHeader
            storyTransition={storyTransitionConfig}
            pauseState={inPause}
          />
        </div>
      </StoryImg>
    </section>
  )
}

export { StoriesHover }