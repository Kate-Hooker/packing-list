import { ListItem,ListItemData } from '../../server/models/listItem'
import request from 'superagent'

//return whole toPack list
export async function getToPackList() {
  const response = await request.get('/api/v1/packingList')

  return response.body as ListItem[]
}

//get a list item by ID
export async function getListItemById(id: number) {
  return await request.get(`/api/v1/packingList/${id}`).then((res) => {
    return res.body
  })
}

//delete an item
export async function deleteListItem(id: number) {
  return request
    .del(`/api/v1/packingList/${id}`)
    .then((res) => res)
    .catch((error) => console.log(error))
}

//add an item
export async function addListItem(newListItem: ListItemData) {
  return request
    .post('/api/v1/packingList')
    .send(newListItem)
    .then((res) => res.body)
    .catch((error) => console.log(error))
}

//update a list item
export async function updateListItem(id:Number, updatedListItem: ListItemData) {
  try {
    const response = await request
      .patch(`/api/v1/packingList/${id}`)
      .send(updatedListItem)

    if (response.status === 204) {
      return true
    } else {
      console.error('Update failed')
      return false
    }
  } catch (error) {
    console.error('Update failed:', error)
    return false
  }
}

/*export async function updateListItem(updatedListItem: ListItem) {
  await request.patch(`/api/v1/list/${updatedListItem.id}`).send({
    itemToPack: updatedListItem.itemToPack,
    checkBeforePacking: updatedListItem.checkBeforePacking,
    hasBeenPacked: updatedListItem.hasBeenPacked,
  })
  return
} */
