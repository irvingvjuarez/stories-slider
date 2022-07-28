import { IPayload } from "@app/reducers/types.interface"

export interface IAppContext {
  modal: {
    status: boolean
    userName?: string | undefined,
    userId?: number | undefined
  },
  dispatch: React.Dispatch<IPayload> | null
}

export interface IStoriesContext {
  currentStories: string[],
  currentStory: string,
  storiesDispatch: React.Dispatch<IPayload> | null
}