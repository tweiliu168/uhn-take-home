import * as React from 'react';
import { useEffect, useState } from 'react';
import PsetTable from './PsetTable';
import Typography from '@mui/material/Typography';

const Psets = () => {
    const [psetData, setPsetData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/psets")
            .then(response => {
                return response.json()
            })
            .then(data => {
                data = data.map(object => {
                    return {
                        "name": object.name,
                        "doi": object.doi
                    }
                })
                setPsetData(data)
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Typography variant='h4' textAlign="center" style={{margin: "10px"}}>PSets Table</Typography>
            <PsetTable data={psetData} loading={loading}/>
        </div>  
    )
}

export default Psets;