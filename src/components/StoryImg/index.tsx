import { useContext } from "react"
import { getCurrentStory, initTransition } from "@app/containers/StoriesHover/utils"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { STORY_TIMING } from "@app/globals"
import { startStoryTransition } from "@app/services/startStoryTransition/index"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { Timer } from "@app/libs/Timer"
import { STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"

import { StoryButton } from "@app/components/StoryButton"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { IAppContext } from "@app/types/interfaces/appContext.interface"

export interface StoryImgProps {
  imgUrl: string;
}

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl }): JSX.Element => {
  const { storiesDispatch, currentStories } = useContext(StoriesContext) as IStoriesContext
  const { dispatch, modal:{ userId } } = useContext(AppContext) as IAppContext
  const { currentStoryIndex } = getCurrentStory(currentStories, imgUrl)
  const configStoryTransition: startStoryTransitionProps = {
    userId,
    currentStoryIndex,
    currentStories,
    storiesDispatch,
    dispatch,
  }

  const handleLoad = () => {
    initTransition(currentStories[currentStoryIndex])
    Timer.id = setTimeout(startStoryTransition(configStoryTransition), STORY_TIMING)
    storiesDispatch?.({ type: STORIES_REDUCER_TYPES.startTiming })
  }

  return(
    <div className="mx-auto h-[85vh] max-w-[500px] px-2 relative">
      <StoryButton direction="left" />

      <img
        src={imgUrl}
        alt=""
        className="h-full object-cover object-center rounded-xl"
        onLoad={handleLoad}
      />

      <StoryButton />
    </div>
  )
}

export { StoryImg }