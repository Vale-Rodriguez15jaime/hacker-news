export interface filtersType {
    key: string,
    value: string | number
}

export interface initialStateTypes {
    isLoading: boolean,
    hits: any[],
    hitsPerPage: number,
    nbPages: number,
    page: number,
    query: string
}