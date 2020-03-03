import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './GroupTable.scss'
import TableRow from './TableRow'

const GroupTable = (props) => {
  let teamsA = props.scores.groups.a.teams;
  let teamsB = props.scores.groups.b.teams;
  let teamsC = props.scores.groups.c.teams;
  let teamsD = props.scores.groups.d.teams;
  let teamsE = props.scores.groups.e.teams;
  let teamsF = props.scores.groups.f.teams;

  const fullStanding = [...(teamsA.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p)), ...(teamsB.map(e => e.p))]
  const thirdplaces = [teamsA[2], teamsB[2], teamsC[2], teamsD[2], teamsE[2], teamsF[2]].sort((a, b) => b.pts - a.pts)
  const array3rd = thirdplaces.splice(0, 4)
  const sumOfGames = fullStanding.reduce((tot, num) => tot + num)


  const standingA = teamsA.map((item, index) => <TableRow key={index} {...item} />)
  const standingB = teamsB.map((item, index) => <TableRow key={index} {...item} />)
  const standingC = teamsC.map((item, index) => <TableRow key={index} {...item} />)
  const standingD = teamsD.map((item, index) => <TableRow key={index} {...item} />)
  const standingE = teamsE.map((item, index) => <TableRow key={index} {...item} />)
  const standingF = teamsF.map((item, index) => <TableRow key={index} {...item} />)


  const tableFrame = {}

  const [fullGroups, setFullGroups] = useState(false)

  const array3rdPlaceholder = [{ gr: 'w', team: '3D/E/F', num: '39' }, { gr: 'x', team: '3A/D/E/F', num: '40' }, { gr: 'y', team: '3A/B/C', num: '42' }, { gr: 'z', team: '3A/B/C/D', num: '44' }]
  // sumOfGames === 72 && !fullGroups ? 
  // props.evalR16(array3rd) 
  // :
  // setFullGroups(true)
  // props.evalR16(array3rdPlaceholder)

  return (
    <div className="table ">
      <h2 className="standings" onClick={() => { props.evalR16(array3rd) }}>Standings</h2>
      <Table striped bordered >
        <thead className={tableFrame}>
          <tr >
            <th colSpan="9">Group A</th>
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
          </tbody >
        
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