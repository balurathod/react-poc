// import { useState  from 'react';
// import './App.css';
// var data = require("./MOCK_DATA.json");

// function App() {

//   const [value, setValue] =  useState('');

//   const onChange = (event) => {
//     setValue(event.target.value);
//   

//   const onSearch = (searchText) => {
//     setValue(searchText);
//     console.log('search ',  searchText);
//   

//   return (
//     <div className="App">
//       <header className="App-header">
//         Search Auto Filter
//       </header>
//       <div className='search-container'>
//         <div className='seach-inner'>
//           <input type='text' value={value onChange={onChange />
//           <button onClick={()=>onSearch(value)>Search</button>
//         </div>
//         <div className='dropdown'>
//           { data
//           .filter( item => {
//               const searchText = value.toLowerCase();
//               const employeeName = item.employee_name;

//               return employeeName && employeeName.startsWith(searchText) && employeeName !== searchText;
//           )
//           .slice(0,10)
//           .map( (item) => (
//             <div onClick={onSearch(item.employee_name) className='dropdown-row' key={item.employee_name>
//             {item.employee_name</div>
//           ))
//         </div>
//       </div>
//     </div>
//   );
// 

// export default App;



import React, { useState}  from "react";
import './App.css';

export default function App() {
  const itemList = [
    "Balu_Rathod",
    "Kalu_Jadhav",
    "Ranjit_Ade",
    "Tanuj_Rathod",
    "Salu_Sette",
    "Aalu_Bate",
    "Talu_Kae",
    "Dalu_Kate",
    "Salu_Ratde",
    "Golu_Gite",
    "Sonu_Pote",
    "Bhalu_Sote",
    "Shilu_Gote",
    "Kalu_Mote",
    "Lalu_Bote",
    "Malu_Dote",
    "Nalu_Kote",
    "Oalu_Safe",
    "Palu_Sade",
    "Lala_Gothe",
    "Rana_Fuge"
  ];

  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;

    // Create copy of text item list
    var updatedList = [...itemList];

    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
  });
    // Trigger render with updated values
    setFilteredList(updatedList);
};

  return (
    <div className="App" data-testid='app-1'>
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <div className='dropdown'>
          {filteredList.map((item) => (
            <span>{item}<br /></span>
          ))
          .slice(0,10)}
        </div>
      </div>
    </div>
    );
  }
