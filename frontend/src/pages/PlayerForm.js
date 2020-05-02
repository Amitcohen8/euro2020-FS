import React from 'react';
import Header from '../components/Header';
import GroupTable from '../components/GroupTable';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Games from '../components/Game';
// import './PlayerForm.scss'


const PlayerForm = () => {

    return (
        <>
            <Header/>
            <div className="main">
            <Games/>
            <GroupTable/>
            </div>
        </>
    )
}

export default PlayerForm
