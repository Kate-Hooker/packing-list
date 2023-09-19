import listItemData from '../../server/models/listItem'
import React from 'react'
import styles from '../styles/index.css'
import { Link } from 'react-router-dom'
import { deleteListItem } from '../apis/toPackList'
//import { fetchListItems } from './hooks/fetchListItems'

interface Props {
  listItems: listItemData[]
  fetchListItems: () => void
}

function DisplayPackingList(props: Props) {
  const { listItems, fetchListItems } = props

  async function handleDelete(id: number) {
    await deleteListItem(id)
    fetchListItems()
  }
  return (
    <div className="packingListDisplay">
      <fieldset>
        <legend>Packing List for Camp A Low Hum</legend>
        {listItems?.map((listItemData) => {
          return (
            <div className="oneListItem" key={listItemData.id}>
              <div>{listItemData.itemToPack}</div>
              <div>{'Check: ' + listItemData.checkBeforePacking}</div>

              <div className="list-edit-delete-group" role="group">
                <Link to={'/' + listItemData.id}>
                  <button className="list-edit-delete-button">Edit</button>
                </Link>
                <button
                  className="list-edit-delete-button"
                  onClick={async () => handleDelete(listItemData.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        })}
        <div></div>
      </fieldset>
    </div>
  )
}

export default DisplayPackingList
