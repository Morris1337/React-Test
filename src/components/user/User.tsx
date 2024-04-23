import React from "react";
import style from "./style.module.css";
import { useState } from "react";

    const User = ({name, secondName, age, gender, rank, children}) => {
        const [score, setScore] = useState(0)
        function scoreChange(randomNum){
            setScore(score +randomNum)
        }
        // const [status, setStatus] = useState(false)
        // function statusChange(){
        //   setStatus(!status)
        // }
        return (
          <div className={style.user}>
            <div>
              {`Пользователь: ${name} ${secondName}`}
            </div>
            <div>
              <div>
                Информация:
              </div>
              <div>
                {`Возраст: ${age}`}
              </div>
              <div>
                {`Пол: ${gender}`}
              </div>
              <div>
                Счет:{score} 
              </div>
              <div>
                <button onClick={()=>scoreChange(5)}>score up</button>
              </div>
              {score >= 20 && (<div>Ты крут!</div>)}
            </div>
            <div>
              Рейтинг {rank}
            </div>
            <div>
              children
            </div>
          </div>
        )
       }
       
       export default User
