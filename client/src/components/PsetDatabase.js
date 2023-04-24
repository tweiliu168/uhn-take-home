import * as React from 'react';
import { useEffect, useState } from 'react';
import PsetTable from './PsetTable';
import Typography from '@mui/material/Typography';

const PsetDatabase = () => {
    const [psetData, setPsetData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/api/pset-database")
            .then(response => {
                return response.json()
            })
            .then(data => {
                data = data.map(object => {
                    return {
                        "name": object.name,
                        "doi": object.repositories[0].doi
                    }
                })
                setPsetData(data)
                setLoading(false);
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <Typography variant='h4' textAlign="center" style={{margin: "10px"}}>PSet Database Table</Typography>
            <PsetTable data={psetData} loading={loading}/>
        </div>  
    )
}

export default PsetDatabase;