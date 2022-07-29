import { useContext } from "react"
import { getCurrentStory, initTransition } from "@app/containers/StoriesHover/utils"

import { AppContext } from "@app/contexts"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IAppContext, IStoriesContext } from "@app/contexts/types.interface"
import { STORIES } from "@app/data/stories"
import { USERS } from "@app/data/users"
import { STORY_TIMING } from "@app/globals"
import { REDUCER_TYPES, STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"
import { IPayload } from "@app/reducers/types.interface"
import { toggleModal } from "@app/services/toggleModal"

interface StoryImgProps {
  imgUrl: string
  storiesBatch: string[]
}

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl, storiesBatch }): JSX.Element => {
  const { storiesDispatch } = useContext(StoriesContext) as IStoriesContext
  const { dispatch, modal:{ userId } } = useContext(AppContext) as IAppContext

  const handleLoad = () => {
    const { currentStoryIndex } = getCurrentStory(storiesBatch, imgUrl)
    initTransition(storiesBatch[currentStoryIndex])

    // Handling stories sliding
    // setTimeout(() => {
    //   const storiesRemaining = currentStoryIndex < storiesBatch.length - 1

    //   if(storiesRemaining){
    //     const newIndex = currentStoryIndex + 1

    //     storiesDispatch?.({
    //       type: STORIES_REDUCER_TYPES.setSingleStory,
    //       content: storiesBatch[newIndex]
    //     })
    //   }

    //   if(!storiesRemaining) {
    //     const moreUsersStories = userId < STORIES.length - 1

    //     if(moreUsersStories){
    //       const newStoriesBatch = STORIES[userId + 1].stories
    //       const userName = USERS.find(user => user.id === userId + 1)?.name

    //       storiesDispatch?.({
    //         type: STORIES_REDUCER_TYPES.setNewStoriesBatch,
    //         config: { newStoriesBatch }
    //       })

    //       dispatch?.({ type: REDUCER_TYPES.setModalUser, config: {
    //         userId: userId + 1,
    //         userName
    //       }})
    //     }

    //     if(!moreUsersStories) toggleModal(dispatch as React.Dispatch<IPayload>)
    //   }

    // }, STORY_TIMING)
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