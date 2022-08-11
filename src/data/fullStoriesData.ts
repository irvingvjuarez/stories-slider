import { USERS } from "./users"
import { STORIES } from "./stories"

export const FULL_STORIES_DATA = STORIES.map(story => {
  const storyUser = USERS.find(user => user.id === story.author)

  return {
    ...story,
    author_name: storyUser?.name,
    author_avatar: storyUser?.avatar
  }
})