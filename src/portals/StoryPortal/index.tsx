import { PostIcon } from "@app/components/PostIcon"
import { AppContext } from "@app/contexts"
import { IAppContext } from "@app/contexts/types.interface"
import { toggleModal } from "@app/services/toggleModal"
import { useContext } from "react"
import { MdOutlineClear } from "react-icons/md"

const StoryPortal: React.FC = (): JSX.Element => {
  const { dispatch } = useContext(AppContext) as IAppContext
  const handleClick = () => dispatch && toggleModal(dispatch)

  return(
    <section className="fixed top-0 w-full h-screen bg-black">
      <div>
        <button onClick={handleClick}>
          <PostIcon iconFn={() => MdOutlineClear} />
        </button>
      </div>
    </section>
  )
}

export { StoryPortal }