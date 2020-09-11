import React from 'react';
import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handsontableData = Handsontable.helper.createSpreadsheetData(6, 10);
  }

  render() {
    return (
      <div>
        <HotTable
          id="hot"
          data={this.handsontableData}
          colHeaders={true}
          rowHeaders={true}
          />
      </div>
    );
  }
}