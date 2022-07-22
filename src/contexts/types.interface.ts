import { IPayload } from "@app/reducers/types.interface"

export interface IAppContext {
  modal: boolean,
  dispatch: React.Dispatch<IPayload> | null
}