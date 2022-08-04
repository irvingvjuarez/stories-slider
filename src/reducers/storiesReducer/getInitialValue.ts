import { STORY_TIMING } from "@app/globals"
import { IStoriesConfig } from "@app/types/interfaces/storiesConfig.interface"

export const getInitialValue = (currentStories: string[], userId: number): IStoriesConfig => {
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