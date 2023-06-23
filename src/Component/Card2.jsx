import React, { useState } from 'react'

import './Card2.scss'
import { QuestionState } from '../Context/Context';
function Card2() {
    const {QuestionArray} = QuestionState();
    const [point,setPoint] = useState(0);

    
  return (
    <div>
             {QuestionArray.slice(0,1).map((item)=>{
    return(
        <div>
            <h1>{item.question}</h1>
            {item.options.map((option)=>{
                return(
                    <div>
                        <button>{option}</button>
                    </div>
                )
            })}

        </div>
    )
   })}
    </div>
  
  )
}

export default Card2