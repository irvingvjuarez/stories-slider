export interface IPayload {
  type: string
  content?: any
  config?: IConfig
}

export interface IConfig {
  userName: string;
  userId: number;
}