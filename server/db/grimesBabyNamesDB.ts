/* import db from './connection'
import { ListItem } from '../models/listItem'

//get all items on list
export async function getToPackList(): Promise<ListItem[]> {
  return await db('toPackList').select('*')
}

//get item dara by id
export async function getListItemById(id: number): Promise<ListItem> {
  return await db('toPackList').where({ id }).first()
}

// add a new item
export async function addListItem(newListItem: ListItem): Promise<ListItem> {
  return await db('toPackList').insert(newListItem).returning('')
}

// delete an item
export async function deleteListItem(id: number): Promise<void> {
  await db('toPackList').where({ id }).delete()
}

//edit an item
export async function updateListItem(
  id: number,
  updatedItemData: ListItem
): Promise<void> {
  await db('toPackList').where({ id }).update(updatedItemData)
}

/* export function updateListItem(
  id: number,
  itemToPack: {itemToPack: string}
  checkBeforePacking: {checkBeforePacking: string}
  hasBeenPacked: {hasBeenPacked:string}
  db = connection
) {
  return db('toPackList')
  .update({itemToPack: itemToPack.itemToPack, checkBeforePacking: checkBeforePacking.checkBeforePacking, hasBeenPacked: hasBeenPacked.hasBeenPacked })
  .where('id', id)
} */

/* export function getItemData(id: number, db = connection) {
  return db('toPackList')
    .select('id', 'itemToPack', 'checkBeforePacking', 'hasBeenPacked')
    .where('id', id)
} */
