import { useEffect, useContext } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { REDUCER_TYPES, STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"

import { getCurrentStory, initTransition } from "./utils"
import { STORY_TIMING } from "@app/globals"

interface StoriesHoverProps {
  children: JSX.Element
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const { currentStories, currentStory, storiesDispatch } = useContext(StoriesContext) as IStoriesContext
  const { dispatch } = useContext(AppContext) as IAppContext

  // Handling stories sliding
  useEffect(() => {
    if(currentStory === currentStories[0]) initTransition(currentStory)

    setTimeout(() => {
      const { currentStoryIndex } = getCurrentStory(currentStories, currentStory)
      if(currentStoryIndex < currentStories.length - 1){
        const newIndex = currentStoryIndex + 1
        initTransition(currentStories[newIndex])
        if(storiesDispatch) storiesDispatch({
          type: STORIES_REDUCER_TYPES.setSingleStory,
          content: currentStories[newIndex]
        })
      }else{
        if(dispatch) dispatch({ type: REDUCER_TYPES.toggleModal })
      }
    }, STORY_TIMING)

  }, [currentStory])
  
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

      <StoryImg imgUrl={currentStory} />
    </section>
  )
}

export { StoriesHover }