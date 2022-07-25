import { toggleOverflowHidden } from "./toggleOverflowHidden"
import { REDUCER_TYPES } from "@app/reducers/types.enums"
import { IPayload } from "@app/reducers/types.interface"

export const toggleModal = (dispatch: React.Dispatch<IPayload>, content?: string | number) => {
  toggleOverflowHidden("body")
  if(dispatch) dispatch({ type: REDUCER_TYPES.toggleModal, content })
}