import { IConfig } from "./config.interface"
import { IStoriesConfig } from "./storiesConfig.interface"

export interface IPayload {
  type: string
  content?: any
  config?: IConfig | IStoriesConfig
}