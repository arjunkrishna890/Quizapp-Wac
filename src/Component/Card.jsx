import React from 'react';
import  './Card.scss';
import { QuestionState } from '../Context/Context';
import { useState } from 'react';

function Catcard() {
  
    const [color,setColor] = useState(null)
    const [disable,setdisable] = useState(null)
    const [index,setIndex] = useState(0)
    const [total,setTotal] = useState(0)
    const [score,setscore] = useState(0)
    const [select,setSelect] = useState(null)
    const {QuestionArray} = QuestionState() 
   
    const next = (add)=>
    {
        setdisable(null)
        setSelect(null)
        setIndex(index+1)
        setTotal(total+add)
        setColor(!color)
    }

    
    const handleCheck = (option,answer,points,key)=>{
      if(option == answer) 
      {
        setColor(true)
        setSelect(key)
        setdisable(true)
        setscore(score+points)
        
      }

      else
      
      {
        
        setSelect(key)
        setdisable(true)
        setColor(false)
      }

    }
    


  return (
    <div className="projectCard">
      { 
       index<=QuestionArray.length-1 ?
            QuestionArray.slice(index,index+1).map((item)=>{
            return(
                  <div> 
                      
                      <div ><p>{index+1}.{item.question} ?</p></div>              
                      <ul>
                   
                        { 
                          item.options.map((option,key)=>{

                          return(
                            <>
                            <div>
                            <button onClick={()=>handleCheck(option,item.answer,item.points,key)}
                             className={(color ? ((select === key) ? "green":""):(select === key ? "red" : ""))  }
                             disabled={disable}>
                        {option}
                            </button>
                            </div>
                            </>
                          )
                        })
                        }
                      </ul>
                      <span>
                    <button className='Next' onClick={()=>next(item.points)} >Next </button>
                    </span>
                    <p style={{fontSize:"1rem"}}>Current Score:({score}/{total})</p>
                    <b><p style={{color:"blue"}}>Question Point:{item.points}</p></b>
                </div>     
              )
            })
        :
        (<><div style={{}}>
          <h1 style={{fontSize:"2.3rem"}}>
          { score>(total/2)?("Congratulations!"):("Sorry,better luck next time")} 
          </h1>
        <p style={{fontSize:"1.3rem"}}>You have scored {score} out of {total} !</p></div></>)
      }
  </div>
  )
}

export default Catcard





























