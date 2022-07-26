import { StoryImg } from "@app/components/StoryImg"

interface StoriesHoverProps {
  children: JSX.Element
  userStories: string[]
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children, userStories }): JSX.Element => {

  return(
    <section className="max-w-[900px] mx-auto">
      <div className="flex justify-between pt-3 space-x-1 px-1">
        {userStories.map(story => (
          <div key={story} className="w-full relative">
            <span className="story-hover"></span>
            <span className="absolute top-0 left-0 story-hover story-hover-transition"></span>
          </div>
        ))}
      </div>

      {children}

      <StoryImg imgUrl={userStories[0]} />
    </section>
  )
}

export { StoriesHover }