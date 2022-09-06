import { useState } from 'react'

import styles from './newsWrapper.module.sass'

import { optionsInterface, frameworkSelectedInterface } from './interfaces'
import { options } from './utils'
import FrameworkSelector from '../frameworkSelector'
import angular from '../../assets/angular.png'

const NewsWrapper = () => {
  const [tabSelected, setTabSelected] = useState<number>(0)

  const [frameworkSelected, setFrameworkSelected] = useState({
    value: 'angular',
    label: 'Angular',
    flag: angular
  })

  const handleChange = (newValue: frameworkSelectedInterface) => {
    setFrameworkSelected(newValue)
  }
  return (
    <div className={styles.wrapper}>
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
      {tabSelected === 0 && (
        <div>
          <FrameworkSelector onChange={handleChange} value={frameworkSelected} />
        </div>
      )}
    </div>
  )
}

export default NewsWrapper
