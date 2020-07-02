import React from 'react'
import Row from './Row'


const rowsInPageNumber = (pageNumber, rowsPerPage) => {
    const startIndex = pageNumber * rowsPerPage
    return [startIndex, startIndex + rowsPerPage]
  }

const TableBody = (props) => {

  const { rows, currentPageNumber, rowsPerPage} = props
    const rowsToRender = rows
      .map(row => <Row key={row.per_id} editpath={row.editpath} name1={row.name1} email={row.email} />)
      .slice(...rowsInPageNumber(currentPageNumber, rowsPerPage))

  return (
    <table>
          <tbody>
            { rowsToRender }
          </tbody>
    </table>
  )
}

export default TableBody
