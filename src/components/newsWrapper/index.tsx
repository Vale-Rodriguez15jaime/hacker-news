import { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import styles from './newsWrapper.module.sass'

import { optionsInterface, frameworkSelectedInterface, newsInterface } from './interfaces'

import { options, optionsSelector, searchId } from './utils'
import FrameworkSelector from '../frameworkSelector'
import { getList, getListFavs as getListFavAction } from '../../actions/list'
import List from '../list'
import useLocalStorage from '../../hooks/useLocalStorage'
import ListFavs from '../listFavs'
import LoadingSpinner from '../loader'

const NewsWrapper = ({ get, list, getListFavs }: newsInterface) => {
  const [tabSelected, setTabSelected] = useState<number>(0)
  const [frameworkSelected, setFrameworkSelected] = useState({ value: '' })

  const [favList, setFavList] = useLocalStorage<string[]>('favs', [])
  const [frameworkStorageSelected, setFrameworkStorageSelected] = useLocalStorage<string>(
    'framework',
    'angular'
  )

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
        { key: 'page', value: 0 },
        { key: 'hitsPerPage', value: 100 }
      ])
    }
  }

  const handleUpdateFavs = (id: number) => {
    const isFoundId = searchId(id, favList)
    let newCurrent
    if (isFoundId) {
      newCurrent = favList.filter((i: string) => i !== id.toString())
    } else {
      newCurrent = [...favList, id.toString()]
    }
    setFavList(newCurrent)
  }

  const handleChange = (newValue: frameworkSelectedInterface) => {
    setFrameworkSelected(newValue)
    setFrameworkStorageSelected(newValue.value)
  }

  const handleScroll = () => {
    get([
      { key: 'query', value: frameworkSelected.value },
      { key: 'page', value: list.page + 1 },
      { key: 'hitsPerPage', value: 100 }
    ])
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
          <List
            results={list.hits}
            favList={favList}
            setFavList={handleUpdateFavs}
            pagination={{
              pages: list.nbPages,
              currentPage: list.page,
              totalItems: list.nbHits
            }}
            isLoading={list.isLoading}
            onScrollEnd={handleScroll}
          />
          {list.isLoading && list.hits.length === 0 && <LoadingSpinner />}
          {!list.isLoading && list.hits.length === 0 && <div>Empty list</div>}
        </div>
      )}
      {tabSelected === 1 && (
        <>
          {list.isLoading && <LoadingSpinner />}
          <ListFavs
            getList={getListFavs}
            favsListData={list.favsList}
            favList={favList}
            isLoading={list.isLoading}
            setFavList={handleUpdateFavs}
          />
        </>
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
  get: getList,
  getListFavs: getListFavAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsWrapper)
