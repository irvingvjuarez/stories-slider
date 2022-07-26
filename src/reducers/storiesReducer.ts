import { IStoriesContext } from "@app/contexts/types.interface"
import { IPayload } from "./types.interface"

export const storiesReducer = (state: IStoriesContext, payload: IPayload) => {
  const { type, content } = payload

  switch(type){
    default:
      return state
  }
}