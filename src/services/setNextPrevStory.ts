import { getCurrentStory } from "@app/containers/StoriesHover/utils"
import { STORIES } from "@app/data/stories"
import { INextPrevStory } from "@app/types/interfaces/nextPrevStoryConfig.interface"

export const setNextPrevStory = (config: INextPrevStory) => {
  const { currentStories, currentStory, direction, userId } = config
  const { currentStoryIndex } = getCurrentStory(currentStories, currentStory)

  if(direction === "left"){
    const storiesInLeft = currentStoryIndex > 0
    const authorsInLeft = userId > 0
    const goingLeft = storiesInLeft || authorsInLeft

    console.log({
      goingLeft
    })

  } else {
    const storiesInRight = currentStoryIndex < currentStories.length - 1
    const authorsInRight = userId < STORIES.length - 1
    const goingRight = storiesInRight || authorsInRight
    
    console.log({
      goingRight
    })

  }
}