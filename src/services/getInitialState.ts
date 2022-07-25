import React from "react";
import { IAppContext } from "../contexts/types.interface";
import { IPayload } from "@app/reducers/types.interface"

// Returning initial state of the whole
export const getInitialState = (): IAppContext => ({
  modal: {
    status: false,
    userID: undefined
  },
  dispatch: null
})