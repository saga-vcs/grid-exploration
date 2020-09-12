import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

async function generateData() {
  console.log("starting to generate data")
  var startGeneratingData = performance.now()

  var i = 0;
  var tableData = [];
  for (i; i<1000000; i++) {
    tableData.push({
        col1: i, 
        col2: i, 
        col3: i,
        col4: i,
        col5: i,
        col6: i,
        col7: i,
        col8: i,
        col9: i,
        col10: i,
        col11: i,
        col12: i,
    })
  }

  var finishGenerateDataTime = performance.now()

  console.log("began generating the data ", startGeneratingData)
  console.log("fished generating data ", finishGenerateDataTime)
  return tableData
}; 


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rowData: [
        {
          col1: 35000, 
          col2: 35000, 
          col3: 35000,
          col4: 35000,
          col5: 35000,
          col6: 35000,
          col7: 35000,
          col8: 35000,
          col9: 35000,
          col10: 35000,
          col11: 35000,
          col12: 35000,
        }
      ]
    };

    this.loadData = this.loadData.bind(this);
      
  }

  async loadData()  {
    console.log("loading the data")
    const tableData = await generateData();
    this.setState({rowData: tableData});
    console.log("state set")

    var finishedDisplayingTable = performance.now()
    console.log("finished displaying table", finishedDisplayingTable)

  }

  render() {
    return (
      <>
        <div>
          <button onClick={(e) => this.loadData()}>load data</button>
          <div className="ag-theme-alpine" style={ {height: '200px', width: '3000px'} }>
            <AgGridReact
                rowData={this.state.rowData}>
                <AgGridColumn field="col1"></AgGridColumn>
                <AgGridColumn field="col2"></AgGridColumn>
                <AgGridColumn field="col3"></AgGridColumn>
                <AgGridColumn field="col4"></AgGridColumn>
                <AgGridColumn field="col5"></AgGridColumn>
                <AgGridColumn field="col6"></AgGridColumn>
                <AgGridColumn field="col7"></AgGridColumn>
                <AgGridColumn field="col8"></AgGridColumn>
                <AgGridColumn field="col9"></AgGridColumn>
                <AgGridColumn field="col10"></AgGridColumn>
                <AgGridColumn field="col11"></AgGridColumn>
                <AgGridColumn field="col12"></AgGridColumn>
            </AgGridReact>
          </div>
        </div>
      </>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
