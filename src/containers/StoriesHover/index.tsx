import { useEffect, useContext } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { REDUCER_TYPES, STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"

import { getCurrentStory, initTransition } from "./utils"
import { STORY_TIMING } from "@app/globals"
import { toggleModal } from "@app/services/toggleModal"
import { STORIES } from "@app/data/stories"
import { USERS } from "@app/data/users"

interface StoriesHoverProps {
  children: JSX.Element
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const { currentStories, currentStory, storiesDispatch } = useContext(StoriesContext) as IStoriesContext
  const { dispatch, modal:{ userId } } = useContext(AppContext) as IAppContext

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
        if(userId < STORIES.length - 1){
          if(storiesDispatch) storiesDispatch({
            type: STORIES_REDUCER_TYPES.setNewStoriesBatch,
            config: {
              newStoriesBatch: STORIES[userId + 1].stories,
            }
          })
          if(dispatch) dispatch({ type: REDUCER_TYPES.setModalUser, config: {
            userId: userId + 1,
            userName: USERS.find(user => user.id === userId + 1)?.name
          } })
        }else{
          if(dispatch) toggleModal(dispatch)
        }
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