import { useContext, useReducer, useState } from "react"
import { MdOutlineClear } from "react-icons/md"
import { FaPause, FaPlay } from "react-icons/fa"
import { PostIcon } from "@app/components/PostIcon"
import { StoryBubble } from "@app/components/StoryBubble"
import { StoriesHover } from "@app/containers/StoriesHover"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { storiesReducer } from "@app/reducers/storiesReducer"
import { getInitialValue } from "@app/reducers/storiesReducer/getInitialValue"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { toggleModal } from "@app/services/toggleModal"
import { IUsers } from "@app/data/interfaces/users.interface"
import { USERS } from "@app/data/users"
import { STORIES } from "@app/data/stories"

const StoryPortal: React.FC = (): JSX.Element => {
  const { dispatch, modal } = useContext(AppContext) as IAppContext

  const [inPause, setInPause] = useState<boolean>(false)
  const [storiesState, storiesDispatch] = useReducer(
    storiesReducer,
    getInitialValue(STORIES[modal.userId].stories, modal.userId)
  )
  const storiesStateInitialValue = {
    ...storiesState as IStoriesContext,
    storiesDispatch
  }

  const handleClick = () => dispatch && toggleModal(dispatch)
  const handlePause = () => {
    const spanElement = document.getElementById(storiesStateInitialValue.currentStory)
    spanElement?.classList.toggle("animation-pause")

    setInPause(prev => !prev)
  }

  /** modal.userID equals name */
  const storyUser = USERS.find(user => user.name === modal.userName) as IUsers
  const { avatar, name, id } = storyUser

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