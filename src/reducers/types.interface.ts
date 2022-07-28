export interface IPayload {
  type: string
  content?: any
  config?: IConfig | IStoriesConfig
}

export interface IConfig {
  userName?: string;
  userId?: number;
}

export interface IStoriesConfig extends IConfig {
  newStoriesBatch?: string[]
}

