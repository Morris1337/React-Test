import React from "react";
// import logo from './logo.svg';
import './App.css';
// import Img from './img';
import User from './components/user/User.tsx';
import MyComponent from "./components/myComponent/MyComponent.tsx";
import InputSting from "./components/form/Form.tsx";
import { useEffect, useState, useCallback } from "react";
import SkillTestComponent from "./components/test/useEffect.tsx";
import BigButton from './components/test/useCallback.tsx'


function App() {
  
  interface IUser{
    name: string,
    secondName: string,
    age: string,
    gender: string,
    rank: number,
    score?: number
  }
  const user : IUser = {
    name: 'Ivan',
    secondName: 'Petrov',
    age: '25',
    gender: 'М',
    rank: 3
    // score: 0
  }

  useEffect(()=>{
    console.log("update")
  }, [user])
  
  function changeUser(){
    user.name = "Alex"
  }
  changeUser()
  const [clicks, updateClicks] = useState(0);
    
  // const handleClickBigButton = () => {
  //   updateClicks((curValue) => curValue + 4321);
  // }
  
  const handleClickBigButton = useCallback(() => {
    updateClicks((curValue) => curValue + 4321);gdfg
  },[updateClicks])

  return (
    <>
      <header>
        <MyComponent>
          <span>one</span>
          <span>two</span>
          <span>three</span>
        </MyComponent>
      </header>
      <main>
        <div>
          <User {...user}>
            Привет я потомок!
          </User>
          <div>
            {user.score}
          </div>
          <SkillTestComponent></SkillTestComponent>
        </div>
      </main>
      <footer>
        <InputSting></InputSting>
        <>
          Кликов: {clicks}
          <button
            onClick={() => {
              updateClicks(clicks + 1)
            }}
          >
            Жми!
          </button>
          <BigButton handleClick={handleClickBigButton} />
        </>
      </footer>
  </>
  );
}

export default App;


