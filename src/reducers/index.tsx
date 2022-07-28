import { IAppContext } from "@app/contexts/types.interface"
import { REDUCER_TYPES } from "./types.enums"
import { IPayload } from "./types.interface"

export const reducerFn = (state: IAppContext, payload: IPayload) => {
  const { type, config } = payload

  switch(type){
    case REDUCER_TYPES.toggleModal:
      return {
        ...state,
        modal: {
          status: !state.modal.status,
          userId: config?.userId,
          userName: config?.userName
        }
      }
    case REDUCER_TYPES.setModalUser:
      return {
        ...state,
        modal: {
          ...state.modal,
          userId: config?.userId,
          userName: config?.userName
        }
      }
    default:
      return state
  }
}