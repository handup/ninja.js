import React, {useState} from 'react'
import Pagination from '../Pagination'
import TableBody from './TableBody'
import Search from './Search'

const calculateTotalNumberOfPages = (rows, rowsPerPage) => {
  if (rowsPerPage === 0) return 0
  return Math.ceil(rows.length / rowsPerPage)
}

const DataTable = ({totalRows, rowsPerPage = 40}) => {
  const [rows, setRows] = useState(totalRows)
  const [currentPageNumber, setCurrentPageNumber] = useState(0)
  const [totalNumberOfPages, setTotalNumberOfPages] = useState(calculateTotalNumberOfPages(rows, rowsPerPage))

  const search = (event) => {
    const text = event.target.value
    let rowsFound = totalRows

    if (text) {
      rowsFound = totalRows.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
         (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    setRows(rowsFound)
    setCurrentPageNumber(0)
    setTotalNumberOfPages(calculateTotalNumberOfPages(rowsFound, rowsPerPage))
  }

    return(
      <div>
      <Search onSearch={search} />
      <TableBody
        rows={rows} 
        currentPageNumber={currentPageNumber} 
        rowsPerPage={rowsPerPage}
      />
      <Pagination
        currentPageNumber={currentPageNumber}
        totalNumberOfPages={totalNumberOfPages}
        onChange={setCurrentPageNumber} />
    </div>
  )
}

export default DataTable