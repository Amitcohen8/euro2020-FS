import React from 'react';


import { connect } from 'react-redux'
import countries from '../utils/countries'



import '../App.scss'

import { useHistory } from 'react-router-dom';

import SingleGame from './SingleGame';

const Games = (props) => {
  const {a,b,c,d,e,f,r16,qf,sf,final} = props.scores
  // const [submitValidation,setSubmitVal] = useState([])
  const history = useHistory();
  const groupsResults = [...a.results,...b.results,...c.results,...d.results,...e.results,...f.results]
  groupsResults.sort((a,b)=>a.num-b.num)
  const resultsR16 = r16.results;
  const resultsQF = qf.results;
  const resultsSF = sf.results;
  const resultsFinal = final.results;
 
  const GroupFixtures = groupsResults.map((game)=>{
    return <SingleGame key={game.num} home={game.home} away={game.away}  gr={game.gr} num={game.num}/>
  })

const fixturesR16 = resultsR16.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'r16'} num={team.num}/>
})
const fixturesQF = resultsQF.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'qf'} num={team.num}/>
})
const fixturesSF = resultsSF.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'sf'} num={team.num}/>
})
const fixturesFinal = resultsFinal.map((team,index)=>{
  return <SingleGame key={index} home={team.home} away={team.away} index={index} gr={'final'} num={team.num}/>
})

const {winner} = props.scores.final.results[0];
const winnerFlag = countries[winner] ? `https://www.countryflags.io/${countries[winner]}/flat/64.png` :  <div/>;

const handleSubmit = () => {
  // ReactDOM.createPortal(<PlayerResults/>, document.getElementById('root'))
  
  // window.open('../pages/PlayerResults')
let allResults = [...a.results,...b.results,...c.results,...d.results,...e.results,...f.results,...r16.results,...qf.results,...sf.results,...final.results,];
// for(let stage = 0;stage<10;stage++){
//   allResults = [...allResults,...(allResultsDictionary[stage].results)] 
let cleanResults = allResults.map(i=>{

  const {penalty,num,gh,ga} = i;
  // if(ga === null || gh === null && (submitValidation.length < 10)){
  //   setSubmitVal(prevState=>[...prevState,num])
  // }
  const gaP = penalty ? penalty.gaP : 'N/A';
  const ghP = penalty ? penalty.ghP : 'N/A';
  const res = penalty ? {num,gh,ga,ghP,gaP} : {num,gh,ga,ghP:'N/A',gaP:'N/A'}
  return res

}).sort((a,b) => a.num-b.num)

const isValid = cleanResults.every(game=>game.gh && game.ga)
if(isValid){history.push("/results");}
// }
console.table(cleanResults)
}
  return (
<div className="game-form">
    <form>
    <h2>Group stage</h2>
    {GroupFixtures}
    <h2>Round of 16</h2>
    {fixturesR16}
    <h2>Quarter-Finals</h2>
    {fixturesQF}
    <h2>Semi-Finals</h2>
    {fixturesSF}
    <h2>Final</h2>
    {fixturesFinal}
    {countries[winner] ? 
    <>
    <h2>Winner</h2>
    <div className="winner">
    <img src={winnerFlag} alt="winner flag" />
    <p>{winner}</p>
    
    </div>
    </>
    : 
    <div/> }
    <a href="/#" onSubmit={()=>{handleSubmit()}}>Submit</a>
    {/* <div>{submitValidation.length > 45 ? `please fix games numbers ${submitValidation.map(item=>`${item}`)}`:<div/>}</div> */}
    </form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    scores: state.scores.groups
  }
}
export default connect(mapStateToProps)(Games)