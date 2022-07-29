import { getCurrentStory, initTransition } from "@app/containers/StoriesHover/utils"

interface StoryImgProps {
  imgUrl: string
  storiesBatch: string[]
}

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl, storiesBatch }): JSX.Element => {
  const handleLoad = () => {
    const { currentStoryIndex } = getCurrentStory(storiesBatch, imgUrl)
    initTransition(storiesBatch[currentStoryIndex])
  }

  return(
    <div className="mx-auto h-[85vh] max-w-[500px] px-2">
      <img
        src={imgUrl}
        alt=""
        className="h-full object-cover object-center rounded-xl"
        onLoad={handleLoad}
      />
    </div>
  )
}

export { StoryImg }