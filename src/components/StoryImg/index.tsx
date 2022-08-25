import { useContext } from "react"
import { getCurrentStory } from "@app/containers/StoriesHover/utils"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { handleLoad } from "./utils"

import { StoryButton } from "@app/components/StoryButton"
import { ConditionalNode } from "@app/components/ConditionalNode"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { IAppContext } from "@app/types/interfaces/appContext.interface"

import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs"
import { STORIES } from "@app/data/stories"

export interface StoryImgProps {
  imgUrl: string;
  children: JSX.Element;
}

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl, children }): JSX.Element => {
  const { storiesDispatch, currentStories } = useContext(StoriesContext) as IStoriesContext
  const { dispatch, modal:{ userId } } = useContext(AppContext) as IAppContext
  const { currentStoryIndex } = getCurrentStory(currentStories, imgUrl)

  const isFirstStory = currentStoryIndex <= 0;
  const isFirstAuthor = userId <= 0;
  const isVeryFirstStory = (isFirstAuthor && isFirstStory)
  const isLastStory = currentStoryIndex >= currentStories.length - 1
  const isLastAuthor = userId >= STORIES.length - 1
  const isVeryLastStory = (isLastStory && isLastAuthor)

  const configStoryTransition: startStoryTransitionProps = {
    userId,
    currentStoryIndex,
    currentStories,
    storiesDispatch,
    dispatch,
  }

  return(
    <div className="mx-auto h-[95vh] max-w-[500px] px-2 relative mt-4">
      {children}

      <ConditionalNode condition={!isVeryFirstStory}>
        <StoryButton direction="left">
          <BsFillArrowLeftCircleFill className="text-xl" />
        </StoryButton>
      </ConditionalNode>

      <img
        src={imgUrl}
        alt=""
        className="h-full object-cover object-center rounded-xl"
        onLoad={handleLoad(configStoryTransition)}
      />

      <ConditionalNode condition={!isVeryLastStory}>
        <StoryButton>
          <BsFillArrowRightCircleFill className="text-xl" />
        </StoryButton>
      </ConditionalNode>
    </div>
  )
}

export { StoryImg }