import React from 'react'
import { Datagrid, List, TextField } from 'react-admin'

const CustomList = () => {
  return (
    <List>
      <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
      </Datagrid>
    </List>
  )
}

export default CustomList