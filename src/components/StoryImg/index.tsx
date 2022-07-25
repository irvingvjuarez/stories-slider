interface StoryImgProps {
  imgUrl: string
}

const StoryImg: React.FC<StoryImgProps> = ({ imgUrl }): JSX.Element => {
  return(
    <div className="mx-auto h-[85vh] max-w-[500px] px-2">
      <img src={imgUrl} alt="" className="h-full object-cover object-center rounded-xl" />
    </div>
  )
}

export { StoryImg }