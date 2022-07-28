import { AppContext } from "@app/contexts"
import { IAppContext } from "@app/contexts/types.interface"
import { useContext } from "react"
import { toggleModal } from "@app/services/toggleModal"

interface StoryBubbleProps {
  imgUrl: string
  userName: string
  userId: number
  width?: string
  height?: string
  isPost?: boolean
}

const StoryBubble: React.FC<StoryBubbleProps> = ({
  imgUrl,
  userName,
  userId,
  width = "w-16",
  height = "h-16",
  isPost = false
}): JSX.Element => {
  const { dispatch } = useContext(AppContext) as IAppContext
  const handleClick = () => dispatch && toggleModal(dispatch, {
    userName,
    userId
  })

  return(
    <div
      className={`flex items-center ${!isPost && "flex-col cursor-pointer"}`}
      onClick={!isPost ? handleClick : () => null} >
      <div className={`${width} ${height} gradient rounded-full p-[2px] mb-1 ${isPost && "mr-2"} ${!isPost && "md:w-20 md:h-20"}`}>
        <div className="w-full h-full bg-black rounded-full overflow-hidden">
          <img src={imgUrl} alt="" className="w-full h-full rounded-full" />
        </div>
      </div>

      <h3 className={`text-white text-sm font-bold text-center ${!isPost && "whitespace-nowrap text-ellipsis overflow-hidden w-16 text-xs"} md:w-20 md:text-md ${isPost && "md:text-lg"}`}>
        {userName}
      </h3>
    </div>
  )
}

export { StoryBubble }