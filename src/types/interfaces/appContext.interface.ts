import { IPayload } from "@app/reducers/types.interface"

export interface IAppContext {
  modal: {
    status: boolean
    userId: number
    userName?: string | undefined
  },
  dispatch: React.Dispatch<IPayload> | null
}