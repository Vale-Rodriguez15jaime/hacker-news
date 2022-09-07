import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './newsWrapper.module.sass'

import { optionsInterface, frameworkSelectedInterface, newsInterface } from './interfaces'

import { options, optionsSelector } from './utils'
import FrameworkSelector from '../frameworkSelector'
import { getList } from '../../actions/list'
import List from '../list'
import useLocalStorage from '../../hooks/useLocalStorage'

const NewsWrapper = ({ get, list }: newsInterface) => {
  const [tabSelected, setTabSelected] = useState<number>(0)
  const [frameworkStorageSelected, setFrameworkStorageSelected] = useLocalStorage<string>(
    'framework',
    'angular'
  )

  const [frameworkSelected, setFrameworkSelected] = useState({ value: '' })

  useEffect(() => {
    getList()
  }, [frameworkSelected])

  useEffect(() => {
    const findSelected = optionsSelector.find(i => i.value === frameworkStorageSelected)
    if (findSelected) setFrameworkSelected(findSelected)
  }, [])

  const getList = () => {
    if (frameworkSelected.value !== '') {
      get([
        { key: 'query', value: frameworkSelected.value },
        { key: 'page', value: 0 }
      ])
    }
  }

  const handleChange = (newValue: frameworkSelectedInterface) => {
    setFrameworkSelected(newValue)
    setFrameworkStorageSelected(newValue.value)
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
          {list.isLoading && <div> LOADING .... </div>}
          {!list.isLoading && list.hits.length > 0 && <List state={list} />}
        </div>
      )}
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = {
  get: getList
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsWrapper)
