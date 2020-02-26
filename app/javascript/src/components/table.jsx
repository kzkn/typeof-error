import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

function format(cell, row){
  return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
}

const selectRowProp = {
  mode: "checkbox",
  clickToSelect: true,
  bgColor: "rgb(238, 193, 213)" 
}

const products = [
  { id: 0, name: 'Item 1', price: 2100 },
  { id: 1, name: 'Item 2', price: 2101 },
  { id: 2, name: 'Item 3', price: 2102 },
]

export default function Table() {
  return (
    <BootstrapTable
      data={products}
      selectRow={selectRowProp}
      striped
      hover
    >
      <TableHeaderColumn dataField="id" isKey dataAlign="right" dataSort>Product ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort>Product Name</TableHeaderColumn>
      <TableHeaderColumn dataField="price" dataAlign="center" dataFormat={format}>Product Price</TableHeaderColumn>
    </BootstrapTable>
  )
}
