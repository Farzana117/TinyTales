import React from "react";
//import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callApi() {
    fetch("http://localhost:9000/testapi")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callApi();
  }
  render() {
    function fun() {
      alert("Hiiiii");
    }
    return (
      <div className="App">
        <center>
          <p>Enter a number below: </p>
          <form>
            <input type="text" name="number" id="number" />
            <br />
            <button onClick={fun}>Submit</button>
          </form>
        </center>
        <br />
        <br />
        <div className="sol">
          <center>
            <h1>Result</h1>
            <table border="1">
              <tr>
                <th>Number</th>
                <th>Word</th>
              </tr>
              <tr>
                <td>10</td>
                <td>hettt</td>
              </tr>
            </table>
            <br />
            <p>{this.state.apiResponse}</p>
          </center>
        </div>
      </div>
    );
  }
}

export default App;
