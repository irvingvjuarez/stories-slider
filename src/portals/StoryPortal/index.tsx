import { useCallback, useContext, useReducer, useState } from "react"
import { MdOutlineClear } from "react-icons/md"
import { FaPause, FaPlay } from "react-icons/fa"
import { PostIcon } from "@app/components/PostIcon"
import { StoryBubble } from "@app/components/StoryBubble"
import { StoriesHover } from "@app/containers/StoriesHover"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"
import { storiesReducer } from "@app/reducers/storiesReducer"
import { getInitialValue } from "@app/reducers/storiesReducer/getInitialValue"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { toggleModal } from "@app/services/toggleModal"
import { IUsers } from "@app/data/interfaces/users.interface"
import { USERS } from "@app/data/users"
import { STORIES } from "@app/data/stories"
import { Timer } from "@app/libs/Timer"
import { startStoryTransition } from "@app/services/startStoryTransition"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { getCurrentStory } from "@app/containers/StoriesHover/utils"

const StoryPortal: React.FC = (): JSX.Element => {
  const { dispatch, modal: { userId, userName } } = useContext(AppContext) as IAppContext
  
  const [inPause, setInPause] = useState<boolean>(false)
  const [storiesState, storiesDispatch] = useReducer(
    storiesReducer,
    getInitialValue(STORIES[userId].stories, userId)
  )

  const storiesStateInitialValue = {
    ...storiesState as IStoriesContext,
    storiesDispatch
  }
    
  const { timing, currentStories, currentStory } = storiesState
  const { currentStoryIndex } = getCurrentStory(currentStories, currentStory)

  const storyTransitionConfig: startStoryTransitionProps = {
    userId,
    storiesDispatch,
    dispatch,
    currentStories,
    currentStoryIndex
  }

  const handleClick = () => dispatch && toggleModal(dispatch)
  const handlePause = () => {
    if(!inPause) clearTimeout(Timer.id)
    if(inPause) Timer.id = setTimeout(startStoryTransition(storyTransitionConfig), timing)

    storiesDispatch({ type: STORIES_REDUCER_TYPES.toggleLoading })
    setInPause(prev => !prev)
  }

  /** modal.userID equals name */
  const storyUser = USERS.find(user => user.name === userName) as IUsers
  const { avatar, name, id } = storyUser

  console.log({
    timing
  })

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
              <button onClick={handlePause}>
                <PostIcon
                  iconFn={() => inPause ? FaPlay : FaPause}
                  iconSize="text-sm"
                  iconSizeMd="text-xl"
                />
              </button>

              <button onClick={handleClick}>
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