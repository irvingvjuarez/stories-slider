import React, { useContext, useEffect } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IStoriesContext } from "@app/contexts/types.interface"

interface StoriesHoverProps {
  children: JSX.Element
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const { currentStories, currentStory, loading } = useContext(StoriesContext) as IStoriesContext

  useEffect(() => {
    if(loading){
      const spanElement = document.getElementById(currentStory)
      spanElement?.classList.toggle("animation-pause")
    }
  }, [loading])
  
  return(
    <section className="max-w-[900px] mx-auto">
      <div className="flex justify-between pt-3 space-x-1 px-1">
        {currentStories.map(story => (
          <div key={story} className="w-full relative">
            <span className="story-hover"></span>
            <span className="absolute top-0 left-0 story-hover" id={story}></span>
          </div>
        ))}
      </div>

      {children}

      <StoryImg
        imgUrl={currentStory}
        storiesBatch={currentStories} />
    </section>
  )
}

export { StoriesHover }