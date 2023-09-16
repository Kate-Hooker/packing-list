import { useState, useEffect } from 'react'
import { getToPackList } from '../../apis/toPackList.ts'
import { ListItem } from '../../../server/models/listItem.ts'

export type FetchListItems = (id: number) => void
export type UseFetchListItems = ReturnType<typeof useFetchListItems>

function useFetchListItems() {
  const [listItems, setListItems] = useState([] as ListItem[])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  function fetchListItems() {
    setLoading(true)
    setError('')

    getToPackList()
      .then((listItems) => {
         setListItems(listItems)
      })
      .finally(() => setLoading(false))
      .catch((err) => {
        setError(err.message)
      })
  }

  useEffect(() => {
    fetchListItems()
  }, [])

  return { listItems, loading, error, fetchListItems }
}

export default useFetchListItems
