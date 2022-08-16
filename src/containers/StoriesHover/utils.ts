export const getCurrentStory = (stories: string[], current: string) => {
  const currentStoryIndex = stories.findIndex(story => story === current)
  return {
    currentStoryIndex,
    currentStory: stories[currentStoryIndex]
  }
}