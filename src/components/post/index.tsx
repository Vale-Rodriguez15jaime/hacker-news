import { MouseEvent } from 'react'

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
        id="iconFav"
        onClick={event => {
          const target = event.target as HTMLElement
          if (target.id === 'iconFav') {
            handleFav(item.created_at_i)
          }
          event.stopPropagation()
        }}
        className={
          searchId(item.created_at_i, favList) ? 'app-icon-heart' : 'app-icon-heart-outline'
        }
      />
    )
  }, [favList])

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement
    if (target.id !== 'iconFav') {
      window && window.open(item.story_url)
    }
    event.stopPropagation()
  }

  return (
    <div onClick={handleOpen} className={styles.wrapper}>
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
