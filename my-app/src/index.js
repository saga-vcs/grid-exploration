import React from "react";
import ReactDOM from "react-dom";
import Handsontable from "handsontable";
import { HotTable, HotColumn } from "@handsontable/react";
import * as serviceWorker from './serviceWorker';


import "handsontable/dist/handsontable.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotSettings: {
        data: [
          ["Obrien Fischer"],
          ["Alexandria Gordon"],
          ["John Stafford"],
          ["Regina Waters"],
          ["Kay Bentley"],
          ["Emerson Drake"],
          ["Dean Stapleton"]
        ],
        rowHeaders: true,
        licenseKey: "non-commercial-and-evaluation"
      }
    };
  }

  render() {
    return (
      <>
        <HotTable settings={this.state.hotSettings}>
        </HotTable>
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
