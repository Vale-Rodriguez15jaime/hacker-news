import { filtersType } from '../actions/list/interfaces'

export const buildFilters = (filters: filtersType[]) => {
    let filtersUrl = ''
    if (filters && filters.length) {
        filters.forEach((i: filtersType, index: number) => {
            filtersUrl += `${index > 0 ? '&' : '?'}${i.key}=${i.value}`
        })
    }
    return filtersUrl
}