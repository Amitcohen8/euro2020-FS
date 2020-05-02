import React from 'react'

const GroupHeader = (props) => {
    return (
        <>
        <tr>
      <th colSpan="9">Group {props.letter}</th>
    </tr>
        </>

    )
}

export default GroupHeader