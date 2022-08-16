import { StoryBubble } from "@app/components/StoryBubble"
import { PostIcon } from "@app/components/PostIcon"
import { IPayload } from "@app/types/interfaces/payload.interface"

import { MdOutlineClear } from "react-icons/md"
import { FaPause, FaPlay } from "react-icons/fa"

import { useStoryPause } from "@app/hooks/useStoryPause"
import { handlePause, handleClick } from "./utils"

interface StoryHeaderProps{
  storyTransition: any;
  pauseState: boolean;
}

const StoryHeader: React.FC<StoryHeaderProps> = ({
  storyTransition: storyTransitionConfig,
  pauseState: inPause
}) => {
  const {
    dispatch,
    userName,
    userAvatar,
    userId
  } = useStoryPause()

  return (
    <div className="p-3 flex justify-between items-center w-full">
      <StoryBubble
        imgUrl={userAvatar}
        userName={userName as string}
        userId={userId}
        isPost={true}
        width="w-10"
        height="h-10"
      />

      <div className="flex items-center space-x-2">
        <button onClick={handlePause(storyTransitionConfig)}>
          <PostIcon
            iconFn={() => inPause ? FaPlay : FaPause}
            iconSize="text-sm"
            iconSizeMd="text-xl"
          />
        </button>

        <button onClick={handleClick(dispatch as React.Dispatch<IPayload>)}>
          <PostIcon iconFn={() => MdOutlineClear} />
        </button>
      </div>
    </div>
  )
}

export { StoryHeader }