import React from 'react'

import Pagination from '../Pagination'
import Search from './Search'
import TableBody from './TableBody'

class DataTable extends React.Component {
  state = {
    rows: this.props.rows,
    currentPageNumber: 0,
    totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
  }

  static defaultProps = {
    rowsPerPage: 40
  }

  calculateTotalNumberOfPages(rows) {
    const { rowsPerPage } = this.props
    if (rowsPerPage === 0) return 0
    return Math.ceil(rows.length / rowsPerPage)
  }

  search(event) {
    const { rows } = this.props
    const text = event.target.value
    let rowsFound = rows

    if (text) {
      rowsFound = rows.filter((row) => {
        return row.name1.toLowerCase().search(text.toLowerCase()) > -1 ||
         (row.email && row.email.toLowerCase().search(text.toLowerCase()) > -1)
      })
    }

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    })
  }

  changeToPageNumber(pageNumber) {
    this.setState({ currentPageNumber: pageNumber })
  }

  render() {
    const { rows, currentPageNumber, totalNumberOfPages } = this.state
    const {rowsPerPage} = this.props

    return(
      <div>
        <Search onSearch={this.search.bind(this)} />
        <TableBody rows={rows} currentPageNumber={currentPageNumber} rowsPerPage={rowsPerPage}/>
        <Pagination
          currentPageNumber={currentPageNumber}
          totalNumberOfPages={totalNumberOfPages}
          onChange={this.changeToPageNumber.bind(this)} />
      </div>
    )
  }
}

export default DataTable
