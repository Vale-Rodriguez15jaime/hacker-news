import { initialStateTypes } from '../../actions/list/interfaces'

export interface optionsInterface {
  label: string
  value: number
}

type StaticImageData = {
  src: string
  blurDataURL: string
  height: number
  width: number
}

export interface frameworkSelectedInterface {
  value: string
  label: string
  flag: StaticImageData
}

export interface newsInterface {
  get: Function
  getListFavs: Function
  list: initialStateTypes
}
