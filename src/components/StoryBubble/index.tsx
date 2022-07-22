import { AppContext } from "@app/contexts"
import { IAppContext } from "@app/contexts/types.interface"
import { REDUCER_TYPES } from "@app/reducers/types.enums"
import { useContext } from "react"

interface StoryBubbleProps {
  imgUrl: string
  name: string
  width?: string
  height?: string
  isPost?: boolean
}

const StoryBubble: React.FC<StoryBubbleProps> = ({
  imgUrl,
  name,
  width = "w-16",
  height = "h-16",
  isPost = false
}): JSX.Element => {
  const { dispatch, modal } = useContext(AppContext) as IAppContext
  const handleClick = () =>{
    if(dispatch) dispatch({ type: REDUCER_TYPES.toggleModal })
  }

  console.log({modal})

  return(
    <div
      className={`flex items-center cursor-pointer ${!isPost && "flex-col"}`}
      onClick={handleClick} >
      <div className={`${width} ${height} gradient rounded-full p-[2px] mb-1 ${isPost && "mr-2"} ${!isPost && "md:w-20 md:h-20"}`}>
        <div className="w-full h-full bg-black rounded-full overflow-hidden">
          <img src={imgUrl} alt="" className="w-full h-full rounded-full" />
        </div>
      </div>

      <h3 className={`text-white text-sm font-bold text-center ${!isPost && "whitespace-nowrap text-ellipsis overflow-hidden w-16 text-xs"} md:w-20 md:text-md ${isPost && "md:text-lg"}`}>
        {name}
      </h3>
    </div>
  )
}

export { StoryBubble }