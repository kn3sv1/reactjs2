import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './style2.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import './index2';

import FilterableTable from './Components/FilterableTable';

// Data for the table to display; can be anything
const data = [
	{ name: "Steve", age: 27, job: "Sandwich Eater" },
	{ name: "Gary", age: 35, job: "Falafeler" },
	{ name: "Greg", age: 24, job: "Jelly Bean Juggler" },
	{ name: "Jeb", age: 39, job: "Burrito Racer" },
	{ name: "Jeff", age: 48, job: "Hot Dog Wrangler" },
	
	{ name: "Steve", age: 27, job: "1Sandwich Eater" },
	{ name: "Gary", age: 35, job: "1Falafeler" },
	{ name: "Greg", age: 24, job: "1Jelly Bean Juggler" },
	{ name: "Jeb", age: 39, job: "1Burrito Racer" },
	{ name: "Jeff", age: 48, job: "1Hot Dog Wrangler" },
	
	{ name: "Steve", age: 27, job: "2Sandwich Eater" },
	{ name: "Gary", age: 35, job: "2Falafeler" },
	{ name: "Greg", age: 24, job: "2Jelly Bean Juggler" },
	{ name: "Jeb", age: 39, job: "2Burrito Racer" },
	{ name: "Jeff", age: 48, job: "2Hot Dog Wrangler" }
];

// Fields to show in the table, and what object properties in the data they bind to
const fields = [
	{ name: 'name', displayName: "Name", inputFilterable: true, sortable: true },
	{ name: 'age', displayName: "Age", inputFilterable: true, exactFilterable: true, sortable: true },
	{ name: 'job', displayName: "Occupation", inputFilterable: true, exactFilterable: true, sortable: true }
];


/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
//ReactDOM.render(<App />,document.getElementById('root'));


ReactDOM.render(<FilterableTable
	namespace="People"
	initialSort="name"
	data={data}
	fields={fields}
	noRecordsMessage="There are no people to display"
	noFilteredRecordsMessage="No people match your filters!"
/>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
