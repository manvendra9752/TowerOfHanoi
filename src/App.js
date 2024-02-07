// import React, { useState } from "react";
// import "./App.css";

// const Layer = ({ size, index }) => (
//   <div className="tile" style={{ width: size * 20 + "px", zIndex: index }} />
// );

// const Stand = () => <div className="stand" />;

// const Column = ({ selected, col, onClick }) => (
//   <div className={`Tower ${selected ? "selected" : ""}`} onClick={onClick}>
//     {col.map((el, index) => (
//       <Layer size={el} key={el} index={index} />
//     ))}
//     <Stand />
//   </div>
// );

// const Hanoi = () => {
//   const [state, setState] = useState({
//     col1: [4, 3, 2, 1],
//     col2: [],
//     col3: [],
//     currentCol: undefined,
//     finish: undefined,
//   });

//   const move = (toCol, fromCol) => {
//     const copyCurrentArray = [...state[state.currentCol]];
//     const elementToMove = copyCurrentArray.pop();
//     setState({
//       ...state,
//       [toCol]: [...state[toCol], elementToMove],
//       [state.currentCol]: copyCurrentArray,
//       currentCol: undefined,
//     });
//     checkIfWin();
//   };

//   const checkIfWin = () => {
//     if (state.col1.length === 0 && state.col2.length === 0) {
//       setState({
//         ...state,
//         finish: "Win",
//       });
//     }
//   };

//   const unselect = () => {
//     setState({
//       ...state,
//       currentCol: undefined,
//     });
//   };

//   const rowClicked = (colName) => {
//     if (state[colName].length === 0 && !state.currentCol) {
//       return;
//     } else if (!state.currentCol) {
//       setState({
//         ...state,
//         currentCol: colName,
//       });
//     } else if (state.currentCol === colName) {
//       unselect();
//     } else {
//       const originCol = state[state.currentCol];
//       const originColEl = originCol[originCol.length - 1];
//       const destinationCol = state[colName];
//       const destinationColEl = destinationCol[destinationCol.length - 1];

//       if (originColEl > destinationColEl) {
//         unselect();
//       } else {
//         move(colName, state.currentCol);
//       }
//     }
//   };

//   return (
//     <div className="App">
//       {["col1", "col2", "col3"].map((col) => (
//         <Column
//           key={col}
//           selected={state.currentCol === col}
//           col={state[col]}
//           onClick={() => rowClicked(col)}
//         />
//       ))}
//       {state.finish && <h2>You Win</h2>}
//     </div>
//   );
// };

// export default Hanoi;
import React, { Component } from "react";
import TowerGroup from "./components/towerGroup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* Source:{" "}
          <a href="https://github.com/neutron37/hanoi">
            https://github.com/neutron37/hanoi
          </a> */}
          <TowerGroup />
        </header>
      </div>
    );
  }
}

export default App;
