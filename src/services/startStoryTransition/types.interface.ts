import { IPayload } from "@app/reducers/types.interface"

export interface startStoryTransitionProps {
  currentStoryIndex: number;
  currentStories: string[];
  userId: number;
  storiesDispatch: React.Dispatch<IPayload> | null;
  dispatch: React.Dispatch<IPayload> | null;
}