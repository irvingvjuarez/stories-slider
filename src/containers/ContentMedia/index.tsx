import { Post } from "@app/components/Post"
import { POSTS } from "@app/data/posts"

const ContentMedia: React.FC = (): JSX.Element => {
  return(
    <section>
      {POSTS.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </section>
  )
}

export { ContentMedia }