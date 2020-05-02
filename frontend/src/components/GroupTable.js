import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import TableRow from './TableRow'
import GroupHeader from './GroupHeader'
const GroupTable = (props) => {
  const {a,b,c,d,e,f} = props.scores.groups;
  let teamsA = a.teams;
  let teamsB = b.teams;
  let teamsC = c.teams;
  let teamsD = d.teams;
  let teamsE = e.teams;
  let teamsF = f.teams;

  // const fullStanding = [...(teamsA.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p))]
  // const thirdplaces = [teamsA[2], teamsB[2], teamsC[2], teamsD[2], teamsE[2], teamsF[2]].sort((a, b) => b.pts - a.pts)
  // const array3rd = thirdplaces.splice(0, 4)
  // const sumOfGames = fullStanding.reduce((tot, num) => tot + num)


  const standingA = teamsA.map(item => <TableRow key={item.team} {...item} />)
  const standingB = teamsB.map(item => <TableRow key={item.team} {...item} />)
  const standingC = teamsC.map(item => <TableRow key={item.team} {...item} />)
  const standingD = teamsD.map(item => <TableRow key={item.team} {...item} />)
  const standingE = teamsE.map(item => <TableRow key={item.team} {...item} />)
  const standingF = teamsF.map(item => <TableRow key={item.team} {...item} />)


  const tableFrame = {}
  const tableHeader =
    <tr>
      <th >Team</th>
      <th>P</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
      <th>GS</th>
      <th>GA</th>
      <th>GD</th>
      <th>Pts</th>
    </tr>

  return (
    <div className="table ">
      
      <Table striped bordered >
<thead className={tableFrame}>
          <tr >
            <th colSpan="9">Groups Standings</th>
          </tr>
        </thead>

<tbody className={tableFrame}>
  
<GroupHeader letter={'A'}/>
{tableHeader}
{standingA}
<GroupHeader letter={'B'}/>
{tableHeader}
{standingB}
<GroupHeader letter={'C'}/>
{tableHeader}
{standingC}
<GroupHeader letter={'D'}/>
{tableHeader}
{standingD}
<GroupHeader letter={'E'}/>
{tableHeader}
{standingE}
<GroupHeader letter={'F'}/>
{tableHeader}
{standingF}
</tbody>



        {/* <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group A</th>
          </tr>
        </thead> */}
{/* 
        <tr>
          <th >Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GS</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        <tbody style={tableFrame}>
          {standingA}
        </tbody>
        <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group B</th>
          </tr>
        </thead>

        <tr>
          <th >Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GS</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        <tbody style={tableFrame}>
          {standingB}
        </tbody >
        <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group C</th>
          </tr>
        </thead>

        <tr>
          <th >Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GS</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        <tbody style={tableFrame}>
          {standingC}
        </tbody >
        <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group D</th>
          </tr>
        </thead>

        <tr>
          <th >Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GS</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        <tbody style={tableFrame}>
          {standingD}
        </tbody >
        <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group E</th>
          </tr>
        </thead>

        <tr>
          <th >Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GS</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        <tbody style={tableFrame}>
          <tr>
            <th>Team</th>
            <th>P</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GS</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
          {standingE}
        </tbody >
        <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group F</th>
          </tr>
        </thead>
        <tr>

          <th >Team</th>
          <th>P</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>GS</th>
          <th>GA</th>
          <th>GD</th>
          <th>Pts</th>
        </tr>
        <tbody style={tableFrame}>
          {standingF}
        </tbody > */}

      </Table>
    </div>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    evalR16: (arr) => dispatch({
      type: 'EVAL_R16',
      arr

    }),


  }
}
const mapStateToProps = (state) => {

  return {
    scores: state.scores,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(GroupTable)