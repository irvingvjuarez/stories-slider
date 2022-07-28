import { StoryBubble } from "@app/components/StoryBubble"
import { USERS } from "@app/data/users"

const Stories: React.FC = (): JSX.Element => {
  return(
    <section className="pl-5 flex space-x-3 border-b-gray-700 border-b-[1px] pb-3 md:space-x-4">
      {USERS.map(user => (
        <StoryBubble
          key={user.id}
          imgUrl={user.avatar}
          userName={user.name}
          userId={user.id} />
      ))}
    </section>
  )
}

export { Stories }