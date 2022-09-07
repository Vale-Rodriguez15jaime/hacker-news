import styles from './list.module.sass'

import Post from '../post'
import { initialStateTypes } from '../../actions/list/interfaces'
import { itemNew } from '../../actions/list/interfaces'
import useLocalStorage from '../../hooks/useLocalStorage'

interface listInterface {
  state: initialStateTypes
}

const List = ({ state }: listInterface) => {
  const [favList, setFavList] = useLocalStorage<string[]>('favs', [])

  const searchId = (id: number) => {
    return favList.find((i: string) => i === id.toString())
  }

  const handleFav = (id: number) => {
    const isFound = searchId(id)
    let newCurrent
    if (isFound) {
      newCurrent = favList.filter((i: string) => i !== id.toString())
    } else {
      newCurrent = [...favList, id.toString()]
    }
    setFavList(newCurrent)
  }
  return (
    <div className={styles.wrapper}>
      {state.hits.map((item: itemNew, index: number) => {
        if (item.story_title && item.story_url && item.author && item.created_at) {
          return (
            <Post
              key={index}
              item={item}
              favList={favList}
              handleFav={handleFav}
              searchId={searchId}
            />
          )
        }
      })}
    </div>
  )
}

export default List
