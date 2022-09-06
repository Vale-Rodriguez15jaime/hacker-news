import styles from './post.module.sass'

const Post = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.dataContainer}>
        <div className={styles.timeLabel}>
          {' '}
          <i className="app-icon-time" /> 3 hours ago by author
        </div>
        <div className={styles.message}>
          Yes, React is taking over front-end development. The question is why
        </div>
      </div>
      <div className={styles.favContainer}>
        <i className="app-icon-heart-outline" />
      </div>
    </div>
  )
}

export default Post
