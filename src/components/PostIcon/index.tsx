import { IconType } from "react-icons"

interface PostIconProps {
  iconFn: () => IconType
  iconSize?: string
  iconSizeMd?: string
}

const PostIcon: React.FC<PostIconProps> = ({
  iconFn,
  iconSize = "text-2xl",
  iconSizeMd = "md:text-3xl"
}) => {
  const IconComponent = iconFn()

  return(
    <IconComponent className={`${iconSize} ${iconSizeMd} cursor-pointer`} />
  )
}

export { PostIcon }