import express from 'express'
const router = express.Router()
import * as db from '../db/grimesBabyNamesDB'
import {
  getListItemById,
  updateListItem,
  addListItem,
} from '../db/grimesBabyNamesDB'

//import whole current list
router.get('/', async (req, res) => {
  const toPackList = await db.getToPackList()
  res.json(toPackList)
})

//single out one task by ID
router.get('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const listItemData = await getListItemById(id)
    res.json(listItemData)
  } catch (err) {
    next(err)
    console.error(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    //const id = Number(req.params.id)
    const updatedItemData = req.body

    await addListItem(updatedItemData)

    res.sendStatus(204)
  } catch (err) {
    next(err)
    console.error(err)
  }
})
router.delete('/:id', async (req, res, next) => {
  try {
  const id = Number(req.params.id)
  await db.deleteListItem(id)

    res.sendStatus(204)
  } catch (err) {
    next(err)
    console.error(err)
  }
})
router.patch('/:id', async (req, res, next) => {
  try {
    const id = Number(req.params.id)
    const updatedItemData = req.body

    await updateListItem(id, updatedItemData)

    res.sendStatus(204)
  } catch (err) {
    next(err)
    console.error(err)
  }
})

export default router
