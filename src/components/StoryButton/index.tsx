interface StoryButtonProps {
  children?: React.ReactNode;
  direction?: "left" | "right";
}

const StoryButton: React.FC<StoryButtonProps> = ({
  children,
  direction = "right"
}): JSX.Element => {
  const getInitialClassName = () => {
    const dirClassName = `${direction}-dir-gradient sm:${direction}-full`
    let classname = `absolute h-full w-1/5 top-0 grid place-content-center ${dirClassName}`
    if(direction === "right") classname += " right-2 sm:translate-x-[100%]"
    if(direction === "left") classname += " sm:translate-x-[-100%]"
    return classname
  }

  return(
    <div className={getInitialClassName()} >
      <div className="bg-black rounded-full hidden sm:block">
        {children}
      </div>
    </div>
  )
}

export { StoryButton }