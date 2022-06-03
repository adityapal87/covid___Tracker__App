import React from 'react';
import styles from './App.module.css';
import { fetchData } from './components/api/index';

import Cards from './components/Cards/cards';
import  Chart  from './components/Chart/chart';
import  CountryPicker  from './components/CountryPicker/countryPicker';
// import { Cards , Chart , CountryPicker } from './components';

class App extends React.Component{

  state={
    data:{},
  };
 
 async componentDidMount(){
    const fetchedData = await fetchData(); // fetching data from api
    // console.log(fetchedData); // to check what data inside this { fetchedData }
    this.setState({ data : {fetchedData} }) //updating data's value's
  }
//  data.fetchedData.confirmed
  render(){
    const { data } = this.state;
    return(
      <div className = {styles.container}>
        <Cards data = {data.fetchedData}/>
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
