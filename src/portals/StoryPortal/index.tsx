import { PostIcon } from "@app/components/PostIcon"
import { MdOutlineClear } from "react-icons/md"

const StoryPortal: React.FC = (): JSX.Element => {
  return(
    <section className="fixed top-0 w-full h-screen bg-black">
      <div>
        <PostIcon iconFn={() => MdOutlineClear} />
      </div>
    </section>
  )
}

export { StoryPortal }