interface StoryBubbleProps {
  imgUrl: string
}

const StoryBubble: React.FC<StoryBubbleProps> = ({
  imgUrl
}): JSX.Element => {
  return(
    <div className="w-16 h-16 gradient rounded-full p-[2px]">
      <div className="w-full h-full bg-black rounded-full">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  )
}

export { StoryBubble }