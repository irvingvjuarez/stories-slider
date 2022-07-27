import { StoryImg } from "@app/components/StoryImg"
import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { REDUCER_TYPES, STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"
import { useEffect, useContext } from "react"

interface StoriesHoverProps {
  children: JSX.Element
}

const setTransition = (spanId: string) => {
  const spanTransition = document.getElementById(spanId)
  spanTransition?.classList.add("story-hover-transition")
}

const StoriesHover: React.FC<StoriesHoverProps> = ({ children }): JSX.Element => {
  const { currentStories, currentStory, storiesDispatch } = useContext(StoriesContext) as IStoriesContext
  const { dispatch } = useContext(AppContext) as IAppContext

  useEffect(() => {
    if(currentStory === currentStories[0]) setTransition(currentStory)

    setTimeout(() => {
      const currentIndex = currentStories.findIndex(stories => stories === currentStory)
      if(currentIndex < currentStories.length - 1){
        const newIndex = currentIndex + 1
        setTransition(currentStories[newIndex])
        if(storiesDispatch) storiesDispatch({
          type: STORIES_REDUCER_TYPES.setSingleStory,
          content: currentStories[newIndex]
        })
      }else{
        if(dispatch) dispatch({ type: REDUCER_TYPES.toggleModal })
      }
    }, 5000)

  }, [currentStory])
  
  return(
    <section className="max-w-[900px] mx-auto">
      <div className="flex justify-between pt-3 space-x-1 px-1">
        {currentStories.map(story => (
          <div key={story} className="w-full relative">
            <span className="story-hover"></span>
            <span className="absolute top-0 left-0 story-hover" id={story}></span>
          </div>
        ))}
      </div>

      {children}

      <StoryImg imgUrl={currentStory} />
    </section>
  )
}

export { StoriesHover }