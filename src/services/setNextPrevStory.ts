import { getCurrentStory } from "@app/containers/StoriesHover/utils"
import { STORIES } from "@app/data/stories"
import { USERS } from "@app/data/users"
import { Timer } from "@app/libs/Timer"
import { REDUCER_TYPES, STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"
import { INextPrevStory } from "@app/types/interfaces/nextPrevStoryConfig.interface"
import { IStoriesConfig } from "@app/types/interfaces/storiesConfig.interface"

export const setNextPrevStory = (config: INextPrevStory) => {
  const {
    currentStories, currentStory,
    direction, userId,
    storiesDispatch, dispatch
  } = config
  const { currentStoryIndex } = getCurrentStory(currentStories, currentStory)
  const endBannerTransition = () => {
    const spanEl = document.getElementById(currentStory)
    spanEl?.classList.remove("animation-pause")
    spanEl?.classList.remove("story-hover-transition")

    if(direction === "right") {
      spanEl?.classList.add("transition-finished")
    }else{
      const prevSpanEl = document.getElementById(currentStories[currentStoryIndex - 1])
      prevSpanEl?.classList.remove("story-hover-transition")
    }
  }

  if(direction === "left"){
    const storiesInLeft = currentStoryIndex > 0
    const authorsInLeft = userId > 0
    const goingLeft = storiesInLeft || authorsInLeft

    if(goingLeft){
      if(storiesInLeft){
        endBannerTransition()

        storiesDispatch?.({
          type: STORIES_REDUCER_TYPES.setSingleStory,
          content: currentStories[currentStoryIndex - 1]
        })
      }else if(authorsInLeft){
        const newUserIdIndex = userId - 1
        const newStoriesBatch = STORIES[newUserIdIndex].stories
        const userName = USERS.find(user => user.id === newUserIdIndex)?.name

        storiesDispatch?.({
          type: STORIES_REDUCER_TYPES.setNewStoriesBatch,
          config: { currentStories: newStoriesBatch } as IStoriesConfig
        })
  
        dispatch?.({ type: REDUCER_TYPES.setModalUser, config: {
          userId: userId - 1,
          userName
        }})
      }

      clearTimeout(Timer.id)
    }

  } else {
    const storiesInRight = currentStoryIndex < currentStories.length - 1
    const authorsInRight = userId < STORIES.length - 1
    const goingRight = storiesInRight || authorsInRight

    // console.log({
    //   storiesInRight,
    //   authorsInRight,
    //   userId
    // })
    
    if(goingRight){
      if(storiesInRight){
        endBannerTransition()

        storiesDispatch?.({
          type: STORIES_REDUCER_TYPES.setSingleStory,
          content: currentStories[currentStoryIndex + 1]
        })
      }else if(authorsInRight){
        const newUserIdIndex = userId + 1
        console.log({
          newUserIdIndex
        })

        const newStoriesBatch = STORIES[newUserIdIndex].stories
        const userName = USERS.find(user => user.id === newUserIdIndex)?.name

        storiesDispatch?.({
          type: STORIES_REDUCER_TYPES.setNewStoriesBatch,
          config: { currentStories: newStoriesBatch } as IStoriesConfig
        })
  
        dispatch?.({ type: REDUCER_TYPES.setModalUser, config: {
          userId: userId + 1,
          userName
        }})
      }

      clearTimeout(Timer.id)
    }

  }
}