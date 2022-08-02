import { IPayload } from "@app/reducers/types.interface"

export interface IAppContext {
  modal: {
    status: boolean
    userId: number
    userName?: string | undefined
  },
  dispatch: React.Dispatch<IPayload> | null
}

export interface IStoriesContext {
  userId: number;
  currentStories: string[];
  currentStory: string;
  loading: boolean;
  storiesDispatch: React.Dispatch<IPayload> | null
  timing: number;
  startTiming: number
}