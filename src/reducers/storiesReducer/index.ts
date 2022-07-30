import { IStoriesContext } from "@app/contexts/types.interface"
import { STORIES_REDUCER_TYPES } from "../types.enums"
import { IPayload, IStoriesConfig } from "../types.interface"

export const storiesReducer = (state: IStoriesContext, payload: IPayload): IStoriesContext => {
  const { type, content } = payload
  const config = payload.config as IStoriesConfig

  switch(type){
    case STORIES_REDUCER_TYPES.setStories:
      return {
        ...state,
        currentStories: content
      }
    case STORIES_REDUCER_TYPES.toggleLoading:
      return{
        ...state,
        loading: !state.loading
      }
    case STORIES_REDUCER_TYPES.setSingleStory:
      return{
        ...state,
        currentStory: content
      }
    case STORIES_REDUCER_TYPES.setNewStoriesBatch:
      return {
        ...state,
        currentStory: config.newStoriesBatch?.[0] as string,
        currentStories: config.newStoriesBatch as string[],
      }
    default:
      return state
  }
}