import styles from './list.module.sass'

import Post from '../post'
import { initialStateTypes } from '../../actions/list/interfaces'
import { itemNew } from '../../actions/list/interfaces'

interface listInterface {
  results: itemNew[],
  favList: string[],
  setFavList: Function
}

const List = ({ results, favList, setFavList }: listInterface) => {
  return (
    <div className={styles.wrapper}>
      {results.map((item: itemNew, index: number) => {
        if (item.story_title && item.story_url && item.author && item.created_at) {
          return (
            <Post
              key={index}
              item={item}
              favList={favList}
              handleFav={setFavList}
            />
          )
        }
      })}
    </div>
  )
}

export default List
