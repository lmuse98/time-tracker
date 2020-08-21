import React, { Component } from "react";
import {  Table } from "semantic-ui-react";
import reports from '../../data/db.json';

class App extends Component {
 
  


  render() {
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Fullname</Table.HeaderCell>
            <Table.HeaderCell>Phone</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {reports.map(el => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.id}</Table.Cell>
                <Table.Cell>
                  {el.user} {el.user}
                </Table.Cell>
                <Table.Cell>{el.report}</Table.Cell>
                <Table.Cell>{el.report}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }
}

export default App;
