import { STORIES } from "@app/data/stories"
import { StoryImg } from "@app/components/StoryImg"

interface StoriesHoverProps {
  children: JSX.Element
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const userStories = STORIES[0]

  return(
    <section className="max-w-[900px] mx-auto">
      <div className="flex justify-between pt-3 space-x-1 px-1">
        {userStories.stories.map(story => (
          <span key={story} className="block w-full h-[2px] rounded-full bg-[rgba(255,255,255,0.6)]"></span>
        ))}
      </div>

      {children}

      <StoryImg imgUrl={userStories.stories[0]} />
    </section>
  )
}

export { StoriesHover }