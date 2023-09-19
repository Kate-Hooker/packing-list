import { useState, useEffect, FormEvent, ChangeEvent } from 'react'
import { useParams, useNavigate, useOutletContext } from 'react-router-dom'
import { ListItem, ListItemData } from '../../server/models/listItem.ts'
import { addListItem, updateListItem } from '../apis/toPackList.ts'
import listItemData from '../../server/models/listItem'

interface Props {
  variant?: 'edit' | 'new'
  loading?: boolean
  listItems: listItemData[]
  fetchListItems: () => void
}

function ListItemForm(props: Props) {
  const navigate = useNavigate()
  const { id } = useParams()
  const { listItems, loading, fetchListItems } = props

  //const { posts, loading, error, fetchPosts } =
  //useOutletContext<UseFetchPosts>()

  //const { invoiceList } = useOutletContext<{ invoiceList: Invoice[] }>();

  const listItem = listItems.find(
    (listItem: ListItem) => listItem.id === Number(id)
  )

  //  const post = posts.find((post) => post.id === Number(id)) || ({} as PostData)
  //const loading = false
  /* const listItem: ListItemData = {
    itemToPack: '',
    checkBeforePacking: '',
    hasBeenPacked: '',
  } */
  const [newListItem, setNewListItem] = useState<ListItemData>({
    itemToPack: '',
    checkBeforePacking: '',
    hasBeenPacked: '',
  })
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (props.variant === 'edit' && !loading && listItem) {
      setNewListItem({
        itemToPack: listItem.itemToPack,
        checkBeforePacking: listItem.checkBeforePacking,
        hasBeenPacked: listItem.hasBeenPacked,
      }) ////////////////////////
    }
  }, [listItem, loading, props.variant])

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!completeListItemData(newListItem)) return null
    if (props.variant === 'edit' && id) {
      return updateListItem(Number(id), newListItem).then(() => {
        fetchListItems()
        navigate(`/`)
      })
    } else if (props.variant === 'new') {
      return addListItem(newListItem).then((newListItem) => {
        fetchListItems()
        navigate(`/`)
      })
    }
  }

  function completeListItemData(listItem: ListItemData) {
    if (
      listItem.itemToPack &&
      listItem.checkBeforePacking &&
      listItem.hasBeenPacked
    ) {
      /////////////////////////////////////////////
      return true
    } else {
      setErrorMessage('Your packing list item needs more data')
      return false
    }
  }

  function handleChange(
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    setNewListItem({ ...newListItem, [e.target.id]: e.target.value })
  }

  if (props.loading) return <p>Loading...</p>

  return (
    <form
      className="pure-form pure-form-aligned"
      aria-label="form to add items to packing list"
      onSubmit={onSubmit}
    >
      {props.variant === 'edit' ? (
        <h2 className="post-title">Edit List Item</h2>
      ) : (
        <div> </div>
      )}

      <fieldset>
        <legend>Form to Add Items to Packing List</legend>
        <div className="pure-control-group">
          <label htmlFor="itemToPack">Item to pack </label>
          <input
            type="text"
            id="itemToPack"
            value={newListItem.itemToPack}
            onChange={handleChange}
            aria-label="Name of item you want to pack"
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="checkBeforePacking">
            What to check before packing?
          </label>
          <input
            type="text"
            id="checkBeforePacking"
            value={newListItem.checkBeforePacking}
            onChange={handleChange}
            aria-label="What to check before your item can be packed"
          />
        </div>

        <div className="pure-control-group">
          <label htmlFor="hasBeenPacked"> Has it been packed? </label>
          <input
            type="text"
            id="hasBeenPacked"
            value={newListItem.hasBeenPacked}
            onChange={handleChange}
          />
        </div>

        <div className="pure-controls">
          <input
            className="pure-button"
            type="submit"
            aria-label="Add Item to Packing List"
          />
        </div>
      </fieldset>

      <p>{errorMessage && errorMessage}</p>
    </form>
  )
}

export default ListItemForm
