import { STORY_TIMING } from "@app/globals"
import { IPayload } from "@app/types/interfaces/payload.interface"
import { IStoriesConfig } from "@app/types/interfaces/storiesConfig.interface"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { STORIES_REDUCER_TYPES } from "../types.enums"

export const storiesReducer = (state: IStoriesContext, payload: IPayload): IStoriesContext => {
  const { type, content } = payload
  const config = payload.config as IStoriesConfig

  switch(type){
    case STORIES_REDUCER_TYPES.startTiming:
      return {
        ...state,
        startTiming: Date.now(),
        timing: STORY_TIMING
      }
    case STORIES_REDUCER_TYPES.setStories:
      return {
        ...state,
        currentStories: content
      }
    case STORIES_REDUCER_TYPES.toggleLoading:
      const { loading, timing, startTiming } = state

      return{
        ...state,
        loading: !loading,
        timing: (!loading) ? timing - (Date.now() - startTiming) : timing,
        startTiming: Date.now()
      }
    case STORIES_REDUCER_TYPES.setSingleStory:
      return{
        ...state,
        currentStory: content
      }
    case STORIES_REDUCER_TYPES.setNewStoriesBatch:
      return {
        ...state,
        currentStory: config.currentStories?.[0] as string,
        currentStories: config.currentStories as string[],
      }
    default:
      return state
  }
}