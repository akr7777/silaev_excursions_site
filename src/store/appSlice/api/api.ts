import { AxiosResponse } from "axios"
import { instance } from "./instance"

export const eventAPI = {
    getAll: (): Promise<AxiosResponse> => {
      return instance.get('events')
    },
    getById: (id: string): Promise<AxiosResponse> => {
      return instance.get('events/' + id)
    },
}

export const newAPI = {
  getAll: (): Promise<AxiosResponse> => {
    return instance.get('news')
  },
  getById: (id: string): Promise<AxiosResponse> => {
    return instance.get('news/' + id)
  },
}