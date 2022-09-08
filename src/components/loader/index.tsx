import styles from './loader.module.sass'

const LoadingSpinner = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.loading} />
    </div>
  )
}

export default LoadingSpinner
