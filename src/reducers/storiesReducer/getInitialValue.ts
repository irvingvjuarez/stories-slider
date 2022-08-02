import { IStoriesContext } from "@app/contexts/types.interface"
import { STORY_TIMING } from "@app/globals"

export const getInitialValue = (currentStories: string[], userId: number): IStoriesContext => {
  return {
    userId,
    currentStories,
    currentStory: currentStories[0],
    storiesDispatch: null,
    loading: false,
    timing: STORY_TIMING,
    startTiming: 0
  }
}