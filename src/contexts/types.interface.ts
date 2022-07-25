import { IPayload } from "@app/reducers/types.interface"

export interface IAppContext {
  modal: {
    status: boolean
    userID: string | number | undefined
  },
  dispatch: React.Dispatch<IPayload> | null
}