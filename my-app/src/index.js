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
    tableData.push({make: i, model: i, price: i})
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
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
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
          <div className="ag-theme-alpine" style={ {height: '200px', width: '600px'} }>
            <AgGridReact
                rowData={this.state.rowData}>
                <AgGridColumn field="make"></AgGridColumn>
                <AgGridColumn field="model"></AgGridColumn>
                <AgGridColumn field="price"></AgGridColumn>
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
