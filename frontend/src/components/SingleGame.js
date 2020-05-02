import React from 'react'
import countries from '../utils/countries'
import validator from 'validator';
import { connect } from 'react-redux'
import { useState } from 'react'
const SingleGame = (props) => {

const [input,setInput] = useState({
  homeInput:'',
  awayInput:'',
awayInputP:''
})
const [homeInputP,setItMotherFucker]= useState('')

const [isValidGame,setIsValidG] = useState(true)
const [isDraw,setIsDraw] = useState(false)

const { awayInput
  ,homeInput,awayInputP
 }
   = input;
const {home,away,gr,num,changeScores,penalty,evalR16} = props

const isPenalty = props.scores.penalty[num]
// const gameIndex = results.findIndex(game=>game.num === props.num);
// const {isActive} = results[gameIndex].penalty
const intValidation = "return event.charCode === 0 || /\d/.test(String.fromCharCode(event.charCode));";

const inputValidation = (e) => {
  const {value,name} = e.target
if(value < 0 || value > 9 || isNaN(value) || !validator.isInt(value)){
setInput({[name]:''})
setIsValidG(false)
} 
else {
  if(isValidGame === false){setIsValidG(true)}
  setInput({...input,[name]:value})
}
}

const validEmptyString = (e) =>{
  const {value} = e.target
  if(value === ''){
return null
  } else {
    return Number(value)
  }
}

const drawValidation= (e,side) =>{
  const {value} = e.target
  if(side === 'h'){
  setItMotherFucker(value)
  } else{
  let score = Number(homeInputP)-Number(value);
  
  
  
   if(score === 0){
    
     setIsDraw(true)
   } else{
    setIsDraw(false)
   }
    
  }
  
  

}
  const homeFlag = countries[home] ? `https://www.countryflags.io/${countries[home]}/flat/48.png` :  `https://www.countryflags.io/${countries['None']}/flat/48.png`;
  const awayFlag =  countries[away] ? `https://www.countryflags.io/${countries[away]}/flat/48.png` : `https://www.countryflags.io/${countries['None']}/flat/48.png`;
  return (
    <>
    {/* <div className="form-group d-flex flex-sm-row justify-content-center"> */}
    <div className="form-group">
      <p className="on-mobile">{num}</p>
      
     <p><img src={homeFlag} alt="home team flag"/></p>
      <p className="home-team">{home}</p>
      
      <input type="text" 
        onKeyPress={()=>intValidation} 
        className="form-control home" name="homeInput"  value={homeInput} 
       onChange={e=>{inputValidation(e)
        
       }} 
        onBlur={e=> {
                                                    if(isValidGame){ 
                                                      changeScores(num, home, validEmptyString(e),'h',away,gr)
                                                    evalR16()
                                                    }
                                                   }
                                                     }
                                                      />
                                                    
      <input type="text" onKeyPress={()=>intValidation} className="form-control away" name="awayInput" value={awayInput} 
        onChange={e=>{inputValidation(e)
          
        
        }} 
        onBlur={e => {
      if(isValidGame) { 
       changeScores(num, away, validEmptyString(e),'a',home,gr)
      evalR16()
       } 
     }
      } />
    
      <p className="away-team">{away}</p>
      <p><img src={awayFlag} alt="away team flag"/></p>
      <p className="on-mobile">{(gr).toUpperCase()}</p>
    </div>
    {isPenalty?
    <div className="form-group">
     <p className="on-mobile">Penalty Shootout</p>
    <p><img src={homeFlag} alt="home team flag"/></p>
      <p className="home-team">{home}</p>
      
    <input type="text" onKeyPress={()=>intValidation} className="form-control home" name="homeInputP" value={homeInputP} onChange={e=>{
      drawValidation(e,'h')
      inputValidation(e)}}
      
       onBlur={e=>{
        if(isValidGame){ 
          penalty(validEmptyString(e),num,'h',gr)
       }}} autoFocus/>
    <input type="text" onKeyPress={()=>intValidation} className="form-control away" name="awayInputP" value={awayInputP}
     onChange={e=>{
      
      drawValidation(e,'a')
      inputValidation(e)
     }}
      onBlur={e=>{
        if(isValidGame && !isDraw){ 
        penalty(validEmptyString(e),num,'a',gr)
        }
        }} />
    <p className="away-team">{away}</p>
    <p ><img src={awayFlag} alt="away team flag"/></p>
    <p className="on-mobile">{gr.toUpperCase()}</p>
    </div>
    
     : <div/>
    }
    {isDraw ? <p className="validation-comment">Penalty score can't be a draw</p> : <div/>}
    {!isValidGame? <p className="validation-comment">Value must be 0-9</p> : <div/>}
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    changeScores: (index, team, score,side,opponent,gr) => dispatch({
      type: 'CHANGE_SCORE',
       index,
      team,
      score,
     side,
     opponent,
     gr
    }),
    evalR16: () => dispatch({
      type: 'EVAL_R16',
    }),
    penalty: (goal,gameNumber,s,stage) => dispatch({
      type: 'PENALTY',
      goal,
      gameNumber,
      s,
      stage
    }),

  }
}
const mapStateToProps = (state) => {
  return {
    scores: state.scores.groups
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleGame)