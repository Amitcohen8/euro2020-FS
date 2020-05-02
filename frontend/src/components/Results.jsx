import React from 'react';
import { connect } from 'react-redux'
import countries from '../utils/countries'



const Results = (props) => {
    const {a,b,c,d,e,f,r16,qf,sf,final} = props.scores;
  
    let allResults = [...a.results,...b.results,...c.results,...d.results,...e.results,...f.results,...r16.results,...qf.results,...sf.results,...final.results,];
    let cleanResults = allResults.map(i=>{
     
      const {penalty,num,gh,ga,home,away} = i;
      const res = penalty ? {num,gh,ga,ghP:penalty.ghP,gaP:penalty.gaP,home,away} : {num,gh,ga,ghP:'-',gaP:'-',home,away}
      return res
    
    }).sort((a,b) => a.num-b.num)

    const showResults = cleanResults.map(item=>{
      const {gh,ga,home,away,num} = item
      const homeFlag = countries[home] ? `https://www.countryflags.io/${countries[home]}/flat/64.png` :  `https://www.countryflags.io/${countries['None']}/flat/64.png`;
      const awayFlag =  countries[away] ? `https://www.countryflags.io/${countries[away]}/flat/64.png` : `https://www.countryflags.io/${countries['None']}/flat/64.png`;

        
        return(
      <div className="score" key={num}>
      <p><img src={homeFlag} alt="home team flag"/></p>
      <p>{home}</p>
      <p >{gh}</p>
      <p >-</p>
      <p >{ga}</p>                                           
      <p>{away}</p>
      <p><img src={awayFlag} alt="away team flag"/></p>
      </div>
        )
    })
    
    
    return (

        
        <div className="results">
   
   {showResults} 
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        scores: state.scores.groups
    }
  }
export default connect(mapStateToProps)(Results)
    
     