import { getInitialClassName } from "./utils"

interface StoryButtonProps {
  children?: React.ReactNode;
  direction?: "left" | "right";
}

const StoryButton: React.FC<StoryButtonProps> = ({
  children,
  direction = "right"
}): JSX.Element => {
  return(
    <div className={getInitialClassName(direction)} >
      <div className="bg-black rounded-full hidden sm:block">
        {children}
      </div>
    </div>
  )
}

export { StoryButton }