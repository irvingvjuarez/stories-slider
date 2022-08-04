import { IPayload } from "./payload.interface"

export interface IStoriesContext {
  userId: number;
  currentStories: string[];
  currentStory: string;
  loading: boolean;
  storiesDispatch: React.Dispatch<IPayload> | null
  timing: number;
  startTiming: number;
  userName?: string;
}