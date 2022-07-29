import { BsThreeDots } from "react-icons/bs"
import { FiHeart } from "react-icons/fi"
import { RiSendPlaneLine } from "react-icons/ri"
import { TbMessageCircle2 } from "react-icons/tb"
import { BsBookmark } from "react-icons/bs"
import { USERS } from "@app/data/users"
import { PostProps } from "./props.interface"
import { StoryBubble } from "../StoryBubble"
import { PostIcon } from "@app/components/PostIcon"

const Post: React.FC<PostProps> = ({author, image, likes, description, created_at}): JSX.Element => {
  const user = USERS.find(user => user.id === author)

  return(
    <div>
      <div className="w-full flex justify-between items-center mb-2 px-3 pt-4">
        {user && <StoryBubble
          imgUrl={user.avatar}
          userName={user.name}
          userId={user.id}
          width="w-11"
          height="w-11"
          isPost={true} />
        }

        <BsThreeDots className="text-white text-lg md:text-xl" />
      </div>

      <div className="min-h-[320px] overflow-x-hidden w-full mb-3">
        <img src={image} alt="" className="w-full min-h-[320px] object-cover object-center" />
      </div>

      <div className="flex justify-between items-center px-3 mb-2">
        <div className="flex justify-between items-center space-x-1 md:space-x-2">
          <PostIcon iconFn={() => FiHeart} />
          <PostIcon iconFn={() => TbMessageCircle2} />
          <PostIcon iconFn={() => RiSendPlaneLine} />
        </div>
        <div>
          <PostIcon iconFn={() => BsBookmark} />
        </div>
      </div>

      <div className="px-3">
        <h3 className="text-md md:text-lg mb-2">It likes to <strong>{likes}</strong> people</h3>

        {user && (
          <div>
            <h2 className="text-md font-semibold inline mr-2">{user.name}</h2>
            <p className="inline">{description}</p>
          </div>
        )}
      </div>

      <span className="px-3 pt-2 pb-3 block text-sm font-medium text-gray-400">{created_at}</span>
    </div>
  )
}

export { Post }