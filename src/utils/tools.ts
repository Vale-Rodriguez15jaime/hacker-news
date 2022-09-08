import { filtersType } from '../actions/list/interfaces'

export const buildFilters = (filters: filtersType[]) => {
    let filtersUrl = ''
    if (filters.length) {
        filters.forEach((i: filtersType, index: number) => {
            console.log('index', index)
            filtersUrl += `${index > 0 ? '&' : '?'}${i.key}=${i.value}`
        })
    }
    return filtersUrl
}