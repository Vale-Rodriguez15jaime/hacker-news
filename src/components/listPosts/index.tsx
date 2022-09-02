import { useState } from 'react'

import styles from './listPosts.module.sass'

import { optionsInterface } from './interfaces'
import { options } from './utils'

const ListPosts = () => {
  const [tabSelected, setTabSelected] = useState<number>(0)
  return (
    <div>
      <div className={styles.tabsWrapper}>
        {options.map((item: optionsInterface, index: number) => {
          const { label, value } = item
          return (
            <div
              key={`${index}_${value}`}
              onClick={() => setTabSelected(value)}
              className={`${styles.tab} ${tabSelected === value ? styles.selected : ''}`}
            >
              {label}
            </div>
          )
        })}
      </div>
      {tabSelected === 0 && <div>test</div>}
    </div>
  )
}

export default ListPosts
