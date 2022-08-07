export interface INextPrevStory {
  direction: "left" | "right";
  userId: number;
  currentStories: string[];
  currentStory: string;
}