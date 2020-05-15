import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../components/Header';
import GroupTable from '../components/GroupTable';
import Games from '../components/Game';
import './PlayerForm.scss'


const PlayerForm = () => {
    const [name, setName] = useState("")

    const fetchingData = async () => {
        try {
            const token = localStorage.getItem('myToken')
            const headers = { Authorization: `Bearer ${token}` } 
            console.log('myToken', token)
            const response = await axios.get('http://localhost:9000/users/me',
                { headers })
            setName(response.data.name)
            console.log('$$$$$$',response.data)

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchingData();
    }, [])
    return (
        <div className="App">
            <Header playerName={name} />
            <div className="main">
                <Games />
                <GroupTable />
            </div>
        </div>
    )
}

export default PlayerForm
