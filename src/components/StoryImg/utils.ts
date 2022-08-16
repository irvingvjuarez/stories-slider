import { Timer } from "@app/libs/Timer"
import { startStoryTransition } from "@app/services/startStoryTransition/index"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { STORY_TIMING } from "@app/globals"
import { STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"

export const initTransition = (spanId: string) => {
  const spanTransition = document.getElementById(spanId)
  spanTransition?.classList.add("story-hover-transition")
}

export const handleLoad = (configStoryTransition: startStoryTransitionProps) => () => {
  const { currentStories, currentStoryIndex, storiesDispatch } = configStoryTransition

  initTransition(currentStories[currentStoryIndex])
  Timer.id = setTimeout(startStoryTransition(configStoryTransition), STORY_TIMING)
  storiesDispatch?.({ type: STORIES_REDUCER_TYPES.startTiming })
}