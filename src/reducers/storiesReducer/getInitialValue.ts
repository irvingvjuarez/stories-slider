import { IStoriesContext } from "@app/contexts/types.interface"

export const getInitialValue = (currentStories: string[], userId: number): IStoriesContext => {
  return {
    userId,
    currentStories,
    currentStory: currentStories[0],
    storiesDispatch: null,
    loading: false
  }
}