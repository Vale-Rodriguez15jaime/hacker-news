import styles from './post.module.sass'
import { itemNew } from '../../actions/list/interfaces'
import moment from 'moment'
import { useMemo } from 'react'
import { searchId } from '../newsWrapper/utils'

interface postInterface {
  item: itemNew
  favList: String[]
  handleFav: Function
}

const Post = ({ item, favList, handleFav }: postInterface) => {
  const iconFav = useMemo(() => {
    return (
      <i
        onClick={() => handleFav(item.created_at_i)}
        className={
          searchId(item.created_at_i, favList) ? 'app-icon-heart' : 'app-icon-heart-outline'
        }
      />
    )
  }, [favList])
  return (
    <div className={styles.wrapper}>
      <div className={styles.dataContainer}>
        <div className={styles.timeLabel}>
          {' '}
          <i className="app-icon-time" /> {moment(item.created_at).utc().fromNow()} by{' '}
          {item.author}
        </div>
        <div className={styles.message}>{item.story_title}</div>
      </div>
      <div className={styles.favContainer}>{iconFav}</div>
    </div>
  )
}

export default Post
