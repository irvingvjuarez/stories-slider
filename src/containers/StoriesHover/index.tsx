import React, { useContext, useEffect } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"

interface StoriesHoverProps {
  children: JSX.Element
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const { currentStories, currentStory, loading } = useContext(StoriesContext) as IStoriesContext

  useEffect(() => {
    const spanElement = document.getElementById(currentStory)
    
    if(loading) spanElement?.classList.add("animation-pause")
    if(!loading) spanElement?.classList.remove("animation-pause")
  }, [loading])
  
  return(
    <section className="max-w-[900px] mx-auto h-screen flex items-center">
      <StoryImg imgUrl={currentStory}>
        <div className="absolute top-0 left-0 w-full flex flex-col items-center">
          <div className="flex justify-between pt-3 space-x-1 px-1 w-[95%]">
            {currentStories.map(story => (
              <div key={story} className="w-full relative">
                <span className="story-hover"></span>
                <span className="absolute top-0 left-0 story-hover" id={story}></span>
              </div>
            ))}
          </div>

          {children}
        </div>
      </StoryImg>
    </section>
  )
}

export { StoriesHover }