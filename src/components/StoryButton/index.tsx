import { getInitialClassName } from "./utils"

interface StoryButtonProps {
  children?: React.ReactNode;
  direction?: "left" | "right";
}

const StoryButton: React.FC<StoryButtonProps> = ({
  children,
  direction = "right"
}): JSX.Element => {
  const handleChangeStory = (triggerEl: "container" | "wrapper") => () => {
    if(window.screen.width >= 640 && triggerEl === "container") return

    console.log("Changing story...")
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