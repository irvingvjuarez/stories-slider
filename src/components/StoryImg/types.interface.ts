import { IPayload } from "@app/reducers/types.interface"

export interface startStoryTransitionProps {
  currentStoryIndex: number;
  storiesBatch: string[];
  userId: number;
  storiesDispatch: React.Dispatch<IPayload> | null;
  dispatch: React.Dispatch<IPayload> | null;
}

export interface StoryImgProps {
  imgUrl: string
  storiesBatch: string[]
}