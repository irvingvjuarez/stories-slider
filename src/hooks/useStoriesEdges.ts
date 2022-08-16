import { STORIES } from "@app/data/stories"

export const useStoriesEdges = (currentStoryIndex: number, userId: number, currentStories: string[]) => {
  const isFirstStory = currentStoryIndex <= 0;
  const isFirstAuthor = userId <= 0;
  const isVeryFirstStory = (isFirstAuthor && isFirstStory)
  const isLastStory = currentStoryIndex >= currentStories.length - 1
  const isLastAuthor = userId >= STORIES.length - 1
  const isVeryLastStory = (isLastStory && isLastAuthor)

  return{
    isVeryFirstStory,
    isVeryLastStory
  }
}