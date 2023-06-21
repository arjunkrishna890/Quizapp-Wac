import React from 'react';
import  './Card.scss';
import { QuestionState } from '../Context/Context';
import { useState } from 'react';

function Catcard() {
  
    const [color,setColor] = useState(null)
    const [selected,setSelected] = useState(null)
    const [index,setIndex] = useState(0)
    const [total,setTotal] = useState(0)
    const [score,setscore] = useState(0)
    const [disabled,setDisabled] = useState(null)
    const {QuestionArray} = QuestionState() 
   
    const correct = (add)=>
    {   
        setColor(true)
        setSelected(true)
        setscore(score+add)
    }
    const wrong = (add,key)=>
    {
        setDisabled(key)
        setSelected(true)
        setColor(false)
    }
    const next = (add)=>
    {
        setSelected(null)
        setDisabled(null)
        setTotal(total+add)
        setIndex(index+1)
        setColor(!color)
    }

  return (
    <div className="projectCard">
      { 
       index<=QuestionArray.length-1 ?
            QuestionArray.slice(index,index+1).map((item)=>{
            return(
                  <div> 
                      <b>Question number {index+1}</b>
                      <div style={{justifyContent:"flex"}}>
                        <p> {item.question} ?</p> 
                      </div>              
                      <ul>
                        {
                          item.options.map((prod,key)=>{
                            {console.log(prod)}
                          return(
                            <>
                             { 
                                prod === item.answer?
                                (
                                <div>
                                <button onClick={()=>correct(item.points,key)} className={color?"green":""} 
                                  disabled={selected}>{prod}</button>
                                {/* {console.log(selected,color,key)} */}
                                </div>

                              ):
                              (<div>
                                    <button onClick={()=>wrong(item.points,key)} className={disabled==key?"red":""}
                                     disabled={selected}>{prod}</button>
                                    {/* {console.log(selected,color,key,disabled)} */}
                              </div>)
                              }
                            </>
                          )
                        })
                        }
                      </ul>
                      <span>
                    <button className='Next' onClick={()=>next(item.points)} >Next </button>
                    <b><p style={{color:"blue"}}>Question Point:{item.points}</p></b>
                    </span>
                    <p style={{fontSize:"1rem"}}>Current Score:({score}/{total})</p>
                </div>     
              )
            })
        :(<><div style={{color:"black",justifyContent:"center",alignItems:"center",marginLeft:"3rem",marginTop:"8rem"}}>
          <h1 style={{fontSize:"2.3rem"}}>
          { score>(total/2)?("Congratulations!"):("Sorry,better luck next time")} 
          
          </h1>
          
        <p style={{fontSize:"1.3rem"}}>You have scored {score} out of {total} !</p></div></>)
      }
          
  </div>
  )
}

export default Catcard