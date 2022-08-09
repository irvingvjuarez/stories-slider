import { useContext, useEffect, useReducer, useState } from "react"
import { STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { getCurrentStory } from "@app/containers/StoriesHover/utils"
import { storiesReducer } from "@app/reducers/storiesReducer"
import { getInitialValue } from "@app/reducers/storiesReducer/getInitialValue"
import { AppContext } from "@app/contexts"
import { IAppContext } from "@app/types/interfaces/appContext.interface"
import { STORIES } from "@app/data/stories"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { USERS } from "@app/data/users"
import { IUsers } from "@app/data/interfaces/users.interface"

export const useStoryPause = () => {
  const { dispatch, modal: { userId, userName } } = useContext(AppContext) as IAppContext
  const [inPause, setInPause] = useState<boolean>(false)
  const initialStories = STORIES[userId].stories
  const storiesInitialValue = getInitialValue(initialStories, userId)

  const [storiesState, storiesDispatch] = useReducer( storiesReducer, storiesInitialValue )
  const storiesStateInitialValue = { ...storiesState as IStoriesContext, storiesDispatch }
    
  const { timing, currentStories, currentStory } = storiesState
  const { currentStoryIndex } = getCurrentStory(currentStories, currentStory)

  const storyTransitionConfig: startStoryTransitionProps = {
    userId,
    storiesDispatch,
    dispatch,
    currentStories,
    currentStoryIndex,
    timing,
    inPause,
    setInPause
  }

  const { avatar: userAvatar } = USERS.find(user => user.name === userName) as IUsers

  useEffect(() => {
    if(inPause){
      storiesDispatch({ type: STORIES_REDUCER_TYPES.toggleLoading })
      setInPause(false)
    }
  }, [currentStory])

  return {
    storiesStateInitialValue,
    storyTransitionConfig,
    inPause,
    dispatch,
    userAvatar,
    userName,
    userId
  }
}