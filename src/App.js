import React from 'react';
import styles from './App.module.css';
import { fetchData } from './components/api/index';
// import { Cards , Chart , CountryPicker } from './components';
import Cards from './components/Cards/cards';

class App extends React.Component{

 async componentDidMount(){
    const data = await fetchData();
    console.log(data);
  }
 
  render(){
    return(
      <div className={styles.container}>
        <Cards />
        {/* <Chart /> */}
        {/* <CountryPicker /> */}
      </div>
    );
  }
}

export default App;
