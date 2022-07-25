import { STORIES } from "@app/data/stories"

const StoriesHover = () => {
  const userStories = STORIES[0]

  return(
    <div className="flex justify-between pt-3 space-x-1 px-1">
      {userStories.stories.map(story => (
        <span key={story} className="block w-full h-[2px] rounded-full bg-[rgba(255,255,255,0.6)]"></span>
      ))}
    </div>
  )
}

export { StoriesHover }