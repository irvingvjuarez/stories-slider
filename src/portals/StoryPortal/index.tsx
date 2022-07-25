import { useContext } from "react"
import { MdOutlineClear } from "react-icons/md"
import { PostIcon } from "@app/components/PostIcon"
import { StoryBubble } from "@app/components/StoryBubble"
import { Logo } from "@app/components/Logo"
import { StoriesHover } from "@app/containers/StoriesHover"

import { AppContext } from "@app/contexts"
import { IAppContext } from "@app/contexts/types.interface"
import { toggleModal } from "@app/services/toggleModal"
import { IUsers } from "@app/data/interfaces/users.interface"
import { USERS } from "@app/data/users"

const StoryPortal: React.FC = (): JSX.Element => {
  const { dispatch, modal } = useContext(AppContext) as IAppContext
  const handleClick = () => dispatch && toggleModal(dispatch)

  /** modal.userID equals name */
  const storyUser = USERS.find(user => user.name === modal.userID) as IUsers
  const { avatar, name } = storyUser

  return(
    <section className="fixed top-0 w-full h-screen bg-black">
      <StoriesHover>
        <div className="p-3 flex justify-between items-center">
          <StoryBubble imgUrl={avatar} name={name} isPost={true} width="w-10" height="h-10" />

          <button onClick={handleClick}>
            <PostIcon iconFn={() => MdOutlineClear} />
          </button>
        </div>
      </StoriesHover>
    </section>
  )
}

export { StoryPortal }