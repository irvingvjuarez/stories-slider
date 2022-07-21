interface StoryBubbleProps {
  imgUrl: string
  name: string
}

const StoryBubble: React.FC<StoryBubbleProps> = ({
  imgUrl,
  name
}): JSX.Element => {
  return(
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 gradient rounded-full p-[2px] mb-1 md:w-20 md:h-20">
        <div className="w-full h-full bg-black rounded-full overflow-hidden">
          <img src={imgUrl} alt="" className="w-full h-full rounded-full" />
        </div>
      </div>

      <h3 className="text-white text-xs whitespace-nowrap text-ellipsis overflow-hidden w-16 font-bold text-center md:w-20 md:text-md">
        {name}
      </h3>
    </div>
  )
}

export { StoryBubble }