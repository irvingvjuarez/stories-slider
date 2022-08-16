import { Timer } from "@app/libs/Timer"
import { STORIES_REDUCER_TYPES } from "@app/reducers/types.enums"
import { startStoryTransition } from "@app/services/startStoryTransition"
import { startStoryTransitionProps } from "@app/services/startStoryTransition/types.interface"
import { toggleModal } from "@app/services/toggleModal"
import { IPayload } from "@app/types/interfaces/payload.interface"
import React from "react"

export const handleClick = (dispatch: React.Dispatch<IPayload>) => () => {
  clearTimeout(Timer.id)
  dispatch && toggleModal(dispatch)
}

export const handlePause = (storyTransitionConfig: startStoryTransitionProps) => () => {
  const { storiesDispatch, timing, inPause, setInPause } = storyTransitionConfig

  if(!inPause) clearTimeout(Timer.id)
  if(inPause) Timer.id = setTimeout(startStoryTransition(storyTransitionConfig), timing)

  storiesDispatch?.({ type: STORIES_REDUCER_TYPES.toggleLoading })
  setInPause?.(prev => !prev)
}