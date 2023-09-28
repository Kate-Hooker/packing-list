/*import DisplayPackingList from './DisplayPackingList.tsx'
import useFetchListItems from './hooks/fetchListItems.tsx'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import AddListItem from './AddListItem.tsx'

function App() {
  const { listItems, loading, error, fetchListItems } = useFetchListItems()

  return (
    <Router>
      <div>
        <header className="header"></header>
        <h1>Packing List</h1>
        <section className="main">
          <Link to="/add">
            <button className="list-add-button">
              Add a new item to your list
            </button>
          </Link>
          <Routes>
            <Route
              path="/add"
              element={
                <AddListItem
                  variant="new"
                  fetchListItems={fetchListItems}
                  listItems={listItems}
                />
              }
            />
            <Route
              path=":id"
              element={
                <AddListItem
                  variant="edit"
                  fetchListItems={fetchListItems}
                  listItems={listItems}
                />
              }
            />
          </Routes>
        </section>
        <DisplayPackingList
          listItems={listItems}
          fetchListItems={fetchListItems}
        />
      </div>
    </Router>
  )
}

export default App */
