import React from "react";
import { IPayload } from "./payload.interface";

export interface INextPrevStory {
  direction: "left" | "right";
  userId: number;
  currentStories: string[];
  currentStory: string;
  storiesDispatch: React.Dispatch<IPayload> | null;
  dispatch: React.Dispatch<IPayload> | null;
}