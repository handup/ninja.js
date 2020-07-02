import React from 'react'

const Row = ({edit_path, name1, email}) => {
  return (
    <tr>
      <td>
        <a href={edit_path}>
          {name1}
        </a><br />
        <small>{email}</small>
      </td>
    </tr>
  )
}

export default Row
