import { IAppContext } from "@app/contexts/types.interface"
import { REDUCER_TYPES } from "./types.enums"
import { IPayload } from "./types.interface"

export const reducerFn = (state: IAppContext, payload: IPayload) => {
  const { type, content } = payload

  switch(type){
    case REDUCER_TYPES.toggleModal:
      return {
        ...state,
        modal: {
          status: !state.modal.status,
          userID: content ?? null
        }
      }
    default:
      return state
  }
}