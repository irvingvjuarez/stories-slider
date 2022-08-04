import { IAppContext } from "@app/types/interfaces/appContext.interface";

// Returning initial state of the whole app
export const getInitialState = (): IAppContext => ({
  modal: {
    status: false,
    userId: 0
  },
  dispatch: null
})