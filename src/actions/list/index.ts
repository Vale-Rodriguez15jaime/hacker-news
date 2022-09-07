import axios from 'axios'
import { Dispatch } from 'redux'

import { listTypes } from './types'
import {filtersType, itemNew} from './interfaces'
import { buildFilters } from '../../utils/tools'

const BASE_URL = ' https://hn.algolia.com/api/v1/search_by_date'

export const getList = (filters: filtersType[]) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: listTypes.GET
    })
    try {
      const url = buildFilters(filters)
      const response = await axios.get(`${BASE_URL}${url}`)
      dispatch({
        payload: { ...response.data },
        type: listTypes.GET_SUCCESS
      })
    } catch (error) {
      dispatch({
        type: listTypes.GET_ERROR
      })
    }
  }
}

export const getListFavs = (list: string[]) => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: listTypes.GET_LIST_FAV
    })
    try {
      let listGet: Promise<any>[] = []
      list.forEach((i: string) => {
        const newGet = new Promise((resolve, reject) =>
          axios
            .get(`${BASE_URL}?numericFilters=created_at_i=${Number(i)}`)
            .then(res => {
              resolve(res)
            })
            .catch(_e => {
              reject()
            })
        )
        listGet = [...listGet, newGet]
      })
      const allResolved = await Promise.allSettled(listGet)
      let result: itemNew[] = []
      await allResolved.forEach((i: any) => {
        if (i.value && i.value.status === 200) {
          const newList = i.value.data.hits
          if (newList.length) {
            result = [...result, newList[0]]
          }
        }

      })
      dispatch({
        type: listTypes.GET_LIST_FAV_SUCCESS,
        payload: result
      })
    } catch (e) {
      dispatch({
        type: listTypes.GET_LIST_FAV_ERROR
      })
    }
  }
}
