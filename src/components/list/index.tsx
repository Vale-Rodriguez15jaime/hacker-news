import { useRef } from 'react'
import styles from './list.module.sass'

import Post from '../post'
import { itemNew } from '../../actions/list/interfaces'

interface listInterface {
  results: itemNew[]
  favList: string[]
  setFavList: Function
  isLoading: boolean
  onScrollEnd: Function
  pagination: any
}

const List = ({
  results,
  favList,
  setFavList,
  pagination,
  isLoading,
  onScrollEnd
}: listInterface) => {
  const content = useRef<HTMLDivElement>(null)
  const handleScroll = () => {
    if (content && content.current) {
      const { scrollHeight, clientHeight, scrollTop } = content && content.current
      if (
        !isLoading &&
        pagination &&
        results?.length < pagination.totalItems &&
        scrollHeight - clientHeight - Math.round(scrollTop) < 100
      ) {
        onScrollEnd && onScrollEnd()
      }
    }
  }
  return (
    <div ref={content} onScroll={handleScroll} className={styles.wrapper}>
      {results.map((item: itemNew, index: number) => {
        if (item.story_title && item.story_url && item.author && item.created_at) {
          return <Post key={index} item={item} favList={favList} handleFav={setFavList} />
        }
      })}
    </div>
  )
}

export default List
