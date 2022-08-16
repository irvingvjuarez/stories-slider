import React, { useContext, useEffect } from "react"

import { StoryImg } from "@app/components/StoryImg"
import { StoriesContext } from "@app/contexts/StoriesContext"
import { IStoriesContext } from "@app/types/interfaces/storiesContext.interface"
import { useStoryPause } from "@app/hooks/useStoryPause"
import { StoryBubble } from "@app/components/StoryBubble"
import { PostIcon } from "@app/components/PostIcon"
import { MdOutlineClear } from "react-icons/md"
import { FaPause, FaPlay } from "react-icons/fa"
import { IPayload } from "@app/types/interfaces/payload.interface"

import { handlePause, handleClick } from "./utils"

const StoriesHover: React.FC = (): JSX.Element => {
  const {
    storyTransitionConfig,
    inPause,
    dispatch,
    userName,
    userAvatar,
    userId,
    currentStory,
    currentStories,
    loading
  } = useStoryPause()

  useEffect(() => {
    const spanElement = document.getElementById(currentStory)
    
    if(loading) spanElement?.classList.add("animation-pause")
    if(!loading) spanElement?.classList.remove("animation-pause")
  }, [loading])
  
  return(
    <section className="max-w-[900px] mx-auto h-screen flex items-center">
      <StoryImg imgUrl={currentStory}>
        <div className="absolute top-0 left-0 w-full flex flex-col items-center z-[2] bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent">
          <div className="flex justify-between pt-3 space-x-1 px-1 w-[95%]">
            {currentStories.map(story => (
              <div key={story} className="w-full relative">
                <span className="story-hover"></span>
                <span className="absolute top-0 left-0 story-hover" id={story}></span>
              </div>
            ))}
          </div>

          <div className="p-3 flex justify-between items-center w-full">
            <StoryBubble
              imgUrl={userAvatar}
              userName={userName as string}
              userId={userId}
              isPost={true}
              width="w-10"
              height="h-10"
            />

            <div className="flex items-center space-x-2">
              <button onClick={handlePause(storyTransitionConfig)}>
                <PostIcon
                  iconFn={() => inPause ? FaPlay : FaPause}
                  iconSize="text-sm"
                  iconSizeMd="text-xl"
                />
              </button>

              <button onClick={handleClick(dispatch as React.Dispatch<IPayload>)}>
                <PostIcon iconFn={() => MdOutlineClear} />
              </button>
            </div>
          </div>
        </div>
      </StoryImg>
    </section>
  )
}

export { StoriesHover }