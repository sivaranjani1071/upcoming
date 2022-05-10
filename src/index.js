import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Mission",
              columns: [
                {
                  accessor: "mission"
                }
              ]
            },
            {
              Header: "Date(UTC)",
              columns: [
                {
                  accessor: "date"
                }
              ]
            },
            {
              Header: "LaunchPad",
              columns: [
                {
                  accessor: "launchpad"
                }
              ]
            }
          ]}
          defaultPageSize={15}
          className="-striped -highlight"
        />
        <br />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
