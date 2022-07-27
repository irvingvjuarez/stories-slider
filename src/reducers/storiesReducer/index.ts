import { IStoriesContext } from "@app/contexts/types.interface"
import { STORIES_REDUCER_TYPES } from "../types.enums"
import { IPayload } from "../types.interface"

export const storiesReducer = (state: IStoriesContext, payload: IPayload): IStoriesContext => {
  const { type, content } = payload

  switch(type){
    case STORIES_REDUCER_TYPES.setStories:
      return {
        ...state,
        currentStories: content
      }
    case STORIES_REDUCER_TYPES.setSingleStory:
      return{
        ...state,
        currentStory: content
      }
    default:
      return state
  }
}