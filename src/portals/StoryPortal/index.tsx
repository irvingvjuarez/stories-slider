import { useContext, useReducer } from "react"
import { MdOutlineClear } from "react-icons/md"
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
  const handleClick = () => dispatch && toggleModal(dispatch)
  const [storiesState, storiesDispatch] = useReducer(storiesReducer, getInitialValue(STORIES[0].stories, modal.userId))
  const storiesStateInitialValue = {
    ...storiesState as IStoriesContext,
    storiesDispatch
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

            <button onClick={handleClick}>
              <PostIcon iconFn={() => MdOutlineClear} />
            </button>
          </div>
        </StoriesHover>
      </section>
    </StoriesContext.Provider>
  )
}

export { StoryPortal }