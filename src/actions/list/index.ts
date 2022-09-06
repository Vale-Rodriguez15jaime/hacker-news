import axios from "axios"
import { Dispatch } from 'redux'

import { listTypes } from './types'
import { filtersType } from './interfaces'
import { buildFilters } from '../../utils/tools'

const BASE_URL = ' https://hn.algolia.com/api/v1/search_by_date'

export const getList = (filters: filtersType[]) => {
    return async (dispatch: Dispatch) => {
        dispatch({
            type: listTypes.GET
        })
        try {
            const url = buildFilters(filters)
            const response = await axios.get(`${BASE_URL}${url}`);
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