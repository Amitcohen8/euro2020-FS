import React from 'react'
import { connect } from 'react-redux'
import '../App.scss'
const TableRow = (props) => {
  const {team,p,w,d,l,gs,ga,gd,pts,results} = props
  let rowDesign = null;
results.forEach(item=>{
  const {away,home} = item;
if(home === team || away === team){
rowDesign = "bg-success"
}
})

  return (

    <>
    
      <tr >
        <td className={rowDesign}>{team}</td>
        <td className={rowDesign}>{p}</td>
        <td className={rowDesign}>{w}</td>
        <td className={rowDesign}>{d}</td>
        <td className={rowDesign}>{l}</td>
        <td className={rowDesign}>{gs}</td>
        <td className={rowDesign}>{ga}</td>
        <td className={rowDesign}>{gd}</td>
        <td className={rowDesign}>{pts}</td>
      </tr>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    results: state.scores.groups.r16.results,
  }
}
export default connect(mapStateToProps)(TableRow)