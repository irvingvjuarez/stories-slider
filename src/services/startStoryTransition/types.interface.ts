import { IPayload } from "@app/types/interfaces/payload.interface";

export interface startStoryTransitionProps {
  currentStoryIndex: number;
  currentStories: string[];
  userId: number;
  storiesDispatch: React.Dispatch<IPayload> | null;
  dispatch: React.Dispatch<IPayload> | null;
  timing?: number;
  inPause?: boolean;
  setInPause?: React.Dispatch<React.SetStateAction<boolean>>;
}