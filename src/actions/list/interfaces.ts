export interface filtersType {
    key: string,
    value: string | number
}

export interface itemNew {
    created_at: string,
    story_title: string,
    story_url: string,
    author: string,
    comment_text: string
}

export interface initialStateTypes {
    isLoading: boolean,
    hits: itemNew[],
    hitsPerPage: number,
    nbPages: number,
    page: number,
    query: string
}