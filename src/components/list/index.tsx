import styles from './list.module.sass'

import Post from '../post'
import { initialStateTypes } from '../../actions/list/interfaces'
import { itemNew } from '../../actions/list/interfaces'

interface listInterface {
  state: initialStateTypes
}

const List = ({ state }: listInterface) => {
  return (
    <div className={styles.wrapper}>
      {state.hits.map((item: itemNew, index: number) => {
        if (item.story_title && item.story_url && item.author && item.created_at) {
          return <Post key={index} item={item} />
        }
      })}
    </div>
  )
}

export default List
