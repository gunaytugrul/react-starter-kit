import styles from './App.module.css';
import {useEffect} from 'react';
import Test from './test.js';
import {Title as Title2} from './Components.js';
import Bootstrap from './Bootstrap';

import './tailwind.css';
import './style.scss'
import Tailwind from './tailwind';





function styles(){
    return (
        console.log(styles),
  
    <div className={styles.App}>
    <Tailwind></Tailwind>
      <Title2>{process.env.NODE_ENV}</Title2>
      <Title2 theme="dark">Deneme</Title2>
      <p className="env">
        {process.env.REACT_APP_API_URL}
        <span>test</span>  


      </p>
      <Bootstrap />
      <header className="App-header">
        <Title2>Test</Title2>
        <Test />
        <p>{process.env.REACT_APP_API_URL}</p>
      </header>
    </div>
    );
    
}

export default styles;