import { IconType } from "react-icons"

interface PostIconProps {
  iconFn: () => IconType
}

const PostIcon: React.FC<PostIconProps> = ({iconFn}) => {
  const IconComponent = iconFn()

  return(
    <IconComponent className="text-2xl md:text-3xl cursor-pointer" />
  )
}

export { PostIcon }