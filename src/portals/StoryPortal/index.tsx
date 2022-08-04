import React, { useContext, useReducer, useState } from "react"
import { MdOutlineClear } from "react-icons/md"
import { FaPause, FaPlay } from "react-icons/fa"
import { PostIcon } from "@app/components/PostIcon"
import { StoryBubble } from "@app/components/StoryBubble"
import { StoriesHover } from "@app/containers/StoriesHover"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { storiesReducer } from "@app/reducers/storiesReducer"
import { getInitialValue } from "@app/reducers/storiesReducer/getInitialValue"
import { IUsers } from "@app/data/interfaces/users.interface"
import { USERS } from "@app/data/users"
import { STORIES } from "@app/data/stories"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { getCurrentStory } from "@app/containers/StoriesHover/utils"

import { IAppContext } from "@app/types/interfaces/appContext.interface"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"

import { handlePause, handleClick } from "./utils"
import { IPayload } from "@app/types/interfaces/payload.interface"

const StoryPortal: React.FC = (): JSX.Element => {
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

  /** modal.userID equals name */
  const { avatar, name, id } = USERS.find(user => user.name === userName) as IUsers

  return(
    <StoriesContext.Provider value={storiesStateInitialValue as IStoriesContext}>
      <section className="fixed top-0 w-full h-screen bg-black">
        <StoriesHover>
          <div className="p-3 flex justify-between items-center">
            <StoryBubble
              imgUrl={avatar}
              userName={name}
              userId={id}
              isPost={true}
              width="w-10"
              height="h-10"
            />

            <div className="flex items-center space-x-2">
              <button onClick={handlePause(storyTransitionConfig)}>
                <PostIcon
                  iconFn={() => inPause ? FaPlay : FaPause}
                  iconSize="text-sm"
                  iconSizeMd="text-xl"
                />
              </button>

              <button onClick={handleClick(dispatch as React.Dispatch<IPayload>)}>
                <PostIcon iconFn={() => MdOutlineClear} />
              </button>
            </div>
          </div>
        </StoriesHover>
      </section>
    </StoriesContext.Provider>
  )
}

export { StoryPortal }