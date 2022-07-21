import { BsThreeDots } from "react-icons/bs"
import { USERS } from "@app/data/users"
import { PostProps } from "./props.interface"
import { StoryBubble } from "../StoryBubble"

const Post: React.FC<PostProps> = ({author}): JSX.Element => {
  const user = USERS.find(user => user.id === author)

  return(
    <div className="flex justify-start">
      <div className="w-full flex justify-between items-center">
        {user && <StoryBubble
          imgUrl={user.avatar}
          name={user.name}
          width="w-11"
          height="w-11"
          isPost={true} />
        }

        <BsThreeDots className="text-white text-lg md:text-xl" />
      </div>
    </div>
  )
}

export { Post }