import React from "react";
import {  Table } from "semantic-ui-react";
import {useSelector} from 'react-redux';


const ReportsList = (props) => {
 
  const { reports } = useSelector((state) => state.reports);
  const { currentWeek } = props;
  console.log("currentWeek", currentWeek);
    return (
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Report</Table.HeaderCell>
            <Table.HeaderCell>date</Table.HeaderCell>
            <Table.HeaderCell>week</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
        {reports.filter(tj => tj.week === currentWeek).map((el, index) => {
            return (
              <Table.Row key={el.id}>
                <Table.Cell>{el.user}</Table.Cell>
                <Table.Cell>
                  {el.report} 
                </Table.Cell>
                <Table.Cell>{el.date} </Table.Cell>
                <Table.Cell>{el.week}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    );
  }


export default ReportsList;