import { useContext } from "react"
import { getCurrentStory, initTransition } from "@app/containers/StoriesHover/utils"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { STORY_TIMING } from "@app/globals"
import { startStoryTransition } from "./utils"
import { StoryImgProps, startStoryTransitionProps } from "./types.interface"

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl, storiesBatch }): JSX.Element => {
  const { storiesDispatch } = useContext(StoriesContext) as IStoriesContext
  const { dispatch, modal:{ userId } } = useContext(AppContext) as IAppContext
  const { currentStoryIndex } = getCurrentStory(storiesBatch, imgUrl)
  const configStoryTransition: startStoryTransitionProps = {
    userId,
    currentStoryIndex,
    storiesBatch,
    storiesDispatch,
    dispatch,
  }

  const handleLoad = () => {
    initTransition(storiesBatch[currentStoryIndex])
    setTimeout(startStoryTransition(configStoryTransition), STORY_TIMING)
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