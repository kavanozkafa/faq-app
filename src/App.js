import './App.css';
import Faq from 'react-faq-component';
import data2 from './QA.json';

const styles = {
   bgColor: '#1f2833',
  titleTextColor: '#44318d',
   titleTextSize: '48px',
  rowTitleColor: '#14a76c',
   rowTitleTextSize: 'medium',
   rowContentColor: 'grey',
  rowContentTextSize: '16px',
   rowContentPaddingTop: '10px',
  rowContentPaddingBottom: '10px',
  rowContentPaddingLeft: '5px',
   rowContentPaddingRight: '15px',
   arrowColor: "red",
  //transitionDuration: "1s",
   timingFunc: "ease",
   
};

const config = {
   animate: true,
   arrowIcon: "$",
   tabFocus: true
};
  
function App() {
  return (
    <div className="App">
      <Faq data={data2} styles={styles} config={config}/>
    </div>
  );
}

export default App;
