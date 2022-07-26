import { StoryImg } from "@app/components/StoryImg"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IStoriesContext } from "@app/contexts/types.interface"
import { useEffect, useContext } from "react"

interface StoriesHoverProps {
  children: JSX.Element
  userStories: string[]
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children, userStories }): JSX.Element => {
  const { currentStories } = useContext(StoriesContext) as IStoriesContext

  useEffect(() => {
    const spanTransition = document.getElementById(currentStories[0])
    spanTransition?.classList.add("story-hover-transition")
  }, [])

  return(
    <section className="max-w-[900px] mx-auto">
      <div className="flex justify-between pt-3 space-x-1 px-1">
        {userStories.map(story => (
          <div key={story} className="w-full relative">
            <span className="story-hover"></span>
            <span className="absolute top-0 left-0 story-hover" id={story}></span>
          </div>
        ))}
      </div>

      {children}

      <StoryImg imgUrl={userStories[0]} />
    </section>
  )
}

export { StoriesHover }