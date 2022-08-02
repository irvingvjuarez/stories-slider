import { useContext } from "react"
import { getCurrentStory, initTransition } from "@app/containers/StoriesHover/utils"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { STORY_TIMING } from "@app/globals"
import { startStoryTransition } from "@app/services/startStoryTransition/index"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { Timer } from "@app/libs/Timer"
import { STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"

export interface StoryImgProps {
  imgUrl: string;
}

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl }): JSX.Element => {
  const { storiesDispatch, currentStories, timing, startTiming } = useContext(StoriesContext) as IStoriesContext
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
    Timer.id = setTimeout(startStoryTransition(configStoryTransition), timing)
    storiesDispatch?.({ type: STORIES_REDUCER_TYPES.startTiming })
  }

  return(
    <div className="mx-auto h-[85vh] max-w-[500px] px-2">
      <img
        src={imgUrl}
        alt=""
        className="h-full object-cover object-center rounded-xl"
        onLoad={handleLoad}
      />
    </div>
  )
}

export { StoryImg }