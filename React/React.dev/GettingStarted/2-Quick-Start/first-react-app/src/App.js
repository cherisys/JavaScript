import './App.css';
import MyButton from './Components/MyButton/MyButton.js';
import AboutPage from './Components/AboutPage/AboutPage.js';
import Profile from './Components/UserProfile/UserProfile.js';
import ProductList from './Components/ProductList/ProductList.js';
import CounterButton from './Components/CounterButton/CounterButton.js';
import SharedCounter from './Components/SharedCounter/SharedCounter.js';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <br/>
      <AboutPage className="about-heading"/>
      <br/>
      <Profile />
      <br/>
      {/* if condition */}
      {isLoggedIn && <p>Logged In</p>}
      <br/>
      {/* if-else condition */}
      {isLoggedIn 
        ? (<p>Logged In</p>)
        : (<p>Not Logged In</p>)
      }
      <br/>
      <ProductList />
      <br/><br/>
      {/* state management inside individual component */}
      <CounterButton />
      <CounterButton />
      <br/><br/>
      {/* shared state management inside parent component */}
      <SharedCounter count={count} setCount={setCount} />
      <SharedCounter count={count} setCount={setCount} />
    </div>
  );
}

export default App;
