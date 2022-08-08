import { getInitialClassName } from "./utils"
import { setNextPrevStory } from "@app/services/setNextPrevStory"
import { useContext } from "react";
import { StoriesContext } from "@app/contexts/StoriesContext";
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface";
import { INextPrevStory } from "@app/types/interfaces/nextPrevStoryConfig.interface";
import { AppContext } from "@app/contexts";
import { IAppContext } from "@app/types/interfaces/appContext.interface";

interface StoryButtonProps {
  children?: React.ReactNode;
  direction?: "left" | "right";
}

const StoryButton: React.FC<StoryButtonProps> = ({
  children,
  direction = "right"
}): JSX.Element => {
  const { userId, currentStories, currentStory, storiesDispatch } = useContext(StoriesContext) as IStoriesContext
  const { dispatch } = useContext(AppContext) as IAppContext
  const nextPrevStoryConfig: INextPrevStory = {
    direction,
    userId,
    currentStories,
    currentStory,
    storiesDispatch,
    dispatch,
  }

  const handleChangeStory = (triggerEl: "container" | "wrapper") => () => {
    if(window.screen.width >= 640 && triggerEl === "container") return
    setNextPrevStory(nextPrevStoryConfig)
  }

  return(
    <div
      className={getInitialClassName(direction)}
      onClick={handleChangeStory("container")}
    >
      <button
        className="bg-black rounded-full hidden sm:block"
        onClick={handleChangeStory("wrapper")}
      >
        {children}
      </button>
    </div>
  )
}

export { StoryButton }