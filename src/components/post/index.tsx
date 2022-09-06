import styles from './post.module.sass'
import { itemNew } from '../../actions/list/interfaces'
import moment from 'moment'

interface postInterface {
  item: itemNew
}

const Post = ({ item }: postInterface) => {
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
      <div className={styles.favContainer}>
        <i className="app-icon-heart-outline" />
      </div>
    </div>
  )
}

export default Post
