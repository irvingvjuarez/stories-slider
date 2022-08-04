interface StoryButtonProps {
  direction?: "left" | "right"
}

const StoryButton: React.FC<StoryButtonProps> = ({
  direction = "right"
}): JSX.Element => {
  const getInitialClassName = () => {
    const dirClassName = `${direction}-dir-gradient`
    let classname = `absolute h-full w-1/5 top-0 ${dirClassName}`
    if(direction === "right") classname += " right-2"
    return classname
  }

  return(
    <div
      className={getInitialClassName()}
    ></div>
  )
}

export { StoryButton }