import React from "react";
import ReactDOM from "react-dom";
import { HotTable } from "@handsontable/react";
import Handsontable from "handsontable";
import * as serviceWorker from './serviceWorker';

import "handsontable/dist/handsontable.min.css"; 

async function generateData() {
  console.log("starting to generate data")
  var startGeneratingData = performance.now()

  var i = 0;
  var tableData = [];
  for (i; i<1000000; i++) {
    tableData.push([i,i,i,i,i,i,i,i,i,i,i,i])
  }

  var finishGenerateDataTime = performance.now()

  console.log("began generating the data ", startGeneratingData)
  console.log("fished generating data ", finishGenerateDataTime)
  return tableData
}; 

function verticalScrolling(hotTable) {
  console.log("veritcal scrolling")
  //var last = hotTable.getPlugin('AutoRowSize').getLastVisibleRow();
  //console.log(last);
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hotSettings: {
        data: [],
        rowHeaders: true,
        licenseKey: "non-commercial-and-evaluation",
        autoRowSize: true
      }
    };

    this.loadData = this.loadData.bind(this);

  }

  async loadData()  {
    console.log("loading the data")
    const tableData = await generateData();
    this.setState({hotSettings: {
      data: tableData,
      rowHeaders: true,
      licenseKey: "non-commercial-and-evaluation"
    }});
    console.log("state set")

    var finishedDisplayingTable = performance.now()
    console.log("finished displaying table", finishedDisplayingTable)



  }

  render() {
    const tableSettings = this.state.hotSettings;

    var hotTable = (<HotTable settings={tableSettings}></HotTable>)

    // attempt to register an event handler for scrolling
    //Handsontable.hooks.add('afterScrollVertically', verticalScrolling(hotTable));

    return (
      <>
        <div>
          <button onClick={(e) => this.loadData()}>load data</button>
          {hotTable}
        </div>
      </>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
