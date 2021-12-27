import { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const Teams = () => {
  const columns = [
    { field: 'id'},
    { field: 'firstName'},
    { field: 'lastName'},
    { field: 'gender'},
    { field: 'role'},
  ]

  const teamsSTATIC = [
    { 
      id: 1,
      name: "New York City",
      users: [{
        "id": 1,
        "firstName": "Alejoa",
        "lastName": "Mendonca",
        "gender": "Female",
        "role": "Progressive"
      }, {
        "id": 2,
        "firstName": "Layney",
        "lastName": "Fernez",
        "gender": "Female",
        "role": "solution"
      }, {
        "id": 3,
        "firstName": "Ami",
        "lastName": "Fritchly",
        "gender": "Male",
        "role": "initiative"
      }, {
        "id": 4,
        "firstName": "Wilhelm",
        "lastName": "Borrowman",
        "gender": "Male",
        "role": "systematic"
      }, {
        "id": 5,
        "firstName": "Zsazsa",
        "lastName": "Kyngdon",
        "gender": "Female",
        "role": "national"
      }, {
        "id": 6,
        "firstName": "Vassily",
        "lastName": "Parsonage",
        "gender": "Female",
        "role": "Proactive"
      }, {
        "id": 7,
        "firstName": "Karita",
        "lastName": "Danko",
        "gender": "Female",
        "role": "solution"
      }, {
        "id": 8,
        "firstName": "Brett",
        "lastName": "Woodger",
        "gender": "Male",
        "role": "optimizing"
      }, {
        "id": 9,
        "firstName": "Wendeline",
        "lastName": "Elner",
        "gender": "Female",
        "role": "strategy"
      }, {
        "id": 10,
        "firstName": "Carmelita",
        "lastName": "Costard",
        "gender": "Female",
        "role": "zero tolerance"
      }]
    },
    { 
      id: 2,
      name: "New York City",
      users: [{
        "id": 1,
        "firstName": "Alejoa",
        "lastName": "Mendonca",
        "gender": "Female",
        "role": "Progressive"
      }, {
        "id": 2,
        "firstName": "Layney",
        "lastName": "Fernez",
        "gender": "Female",
        "role": "solution"
      }, {
        "id": 3,
        "firstName": "Ami",
        "lastName": "Fritchly",
        "gender": "Male",
        "role": "initiative"
      }, {
        "id": 4,
        "firstName": "Wilhelm",
        "lastName": "Borrowman",
        "gender": "Male",
        "role": "systematic"
      }, {
        "id": 5,
        "firstName": "Zsazsa",
        "lastName": "Kyngdon",
        "gender": "Female",
        "role": "national"
      }, {
        "id": 6,
        "firstName": "Vassily",
        "lastName": "Parsonage",
        "gender": "Female",
        "role": "Proactive"
      }, {
        "id": 7,
        "firstName": "Karita",
        "lastName": "Danko",
        "gender": "Female",
        "role": "solution"
      }, {
        "id": 8,
        "firstName": "Brett",
        "lastName": "Woodger",
        "gender": "Male",
        "role": "optimizing"
      }, {
        "id": 9,
        "firstName": "Wendeline",
        "lastName": "Elner",
        "gender": "Female",
        "role": "strategy"
      }, {
        "id": 10,
        "firstName": "Carmelita",
        "lastName": "Costard",
        "gender": "Female",
        "role": "zero tolerance"
      }]
    },
    { 
      id: 3,
      name: "New York City",
      users: [{
        "id": 1,
        "firstName": "Alejoa",
        "lastName": "Mendonca",
        "gender": "Female",
        "role": "Progressive"
      }, {
        "id": 2,
        "firstName": "Layney",
        "lastName": "Fernez",
        "gender": "Female",
        "role": "solution"
      }, {
        "id": 3,
        "firstName": "Ami",
        "lastName": "Fritchly",
        "gender": "Male",
        "role": "initiative"
      }, {
        "id": 4,
        "firstName": "Wilhelm",
        "lastName": "Borrowman",
        "gender": "Male",
        "role": "systematic"
      }, {
        "id": 5,
        "firstName": "Zsazsa",
        "lastName": "Kyngdon",
        "gender": "Female",
        "role": "national"
      }, {
        "id": 6,
        "firstName": "Vassily",
        "lastName": "Parsonage",
        "gender": "Female",
        "role": "Proactive"
      }, {
        "id": 7,
        "firstName": "Karita",
        "lastName": "Danko",
        "gender": "Female",
        "role": "solution"
      }, {
        "id": 8,
        "firstName": "Brett",
        "lastName": "Woodger",
        "gender": "Male",
        "role": "optimizing"
      }, {
        "id": 9,
        "firstName": "Wendeline",
        "lastName": "Elner",
        "gender": "Female",
        "role": "strategy"
      }, {
        "id": 10,
        "firstName": "Carmelita",
        "lastName": "Costard",
        "gender": "Female",
        "role": "zero tolerance"
      }]
    }
  ]
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const res = axios.get('http://localhost:8000/api/team');
    res.then(res => setTeams(res.data));
  }, []);

  return (
    <>
        {
          teamsSTATIC.map(team => (
            <div key={team.id} style={{ height: '400px', width: '100%' }}>
              <Typography variant='h6'>Team: {team.name}</Typography>
              <DataGrid
                rows={team.users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                />
            </div>)
          )
        }
        
    </>
  );
}

export default Teams;