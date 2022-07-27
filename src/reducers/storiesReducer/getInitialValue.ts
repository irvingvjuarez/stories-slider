import { IStoriesContext } from "@app/contexts/types.interface"

export const getInitialValue = (currentStories: string[]): IStoriesContext => {
  return {
    currentStories,
    currentStory: currentStories[0],
    storiesDispatch: null
  }
}