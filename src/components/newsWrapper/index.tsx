import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './newsWrapper.module.sass'

import { optionsInterface, frameworkSelectedInterface, newsInterface } from './interfaces'

import {options, optionsSelector} from './utils'
import FrameworkSelector from '../frameworkSelector'
import { getList } from '../../actions/list'
import List from "../list";

const NewsWrapper = ({ get, list }: newsInterface) => {
  const [tabSelected, setTabSelected] = useState<number>(0)

  const [frameworkSelected, setFrameworkSelected] = useState(optionsSelector[0])

  useEffect(() => {
    getList()
  }, [frameworkSelected])

  const getList = () => {
    get([
      { key: 'query', value: frameworkSelected.value },
      { key: 'page', value: 0 }
    ])
  }

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
