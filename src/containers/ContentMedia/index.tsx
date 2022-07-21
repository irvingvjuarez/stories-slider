import { Post } from "@app/components/Post"
import { PostProps } from "@app/components/Post/props.interface"
import { POSTS } from "@app/data/posts"

const ContentMedia: React.FC = (): JSX.Element => {
  const post = POSTS[0] as PostProps

  return(
    <section>
      <Post {...post} />
    </section>
  )
}

export { ContentMedia }