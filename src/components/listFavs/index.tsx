import { itemNew } from '../../actions/list/interfaces'
import List from '../list'
import { useEffect } from 'react'

interface listInterface {
  favsListData: itemNew[]
  getList: Function
  favList: string[]
  setFavList: Function
  isLoading: boolean
}

const ListFavs = ({
  favsListData,
  isLoading,
  getList,
  favList,
  setFavList
}: listInterface) => {

  useEffect(() => {
    getInitial()
  }, [favList])

  const getInitial = () => {
    getList(favList)
  }
  return (
    <>
      {!isLoading && favsListData.length > 0 && (
        <List results={favsListData} favList={favList} setFavList={setFavList} />
      )}
      {!isLoading && favsListData.length === 0 && <div>Empty list</div>}
    </>
  )
}

export default ListFavs
