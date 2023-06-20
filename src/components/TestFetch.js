import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useEffect, useState } from 'react'
const TestFetch = () => {
    const[APIData, setAPIData]=useState([])
    const baseURL=`...`;
    useEffect(() => {fetch(baseURL).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => {setAPIData(data)})
    .catch(error => console.log(error.message));
},[]);
  return (
    <div>
      {APIData.map((data)=>{
        <Grid item md={4}>
            <Card>
                <CardMedia
                component="img"
                height="240"
                image={data.img}
                alt={data.name}></CardMedia>
                <CardContent>
                    <Typography gutterBottom variant='h5' component="div">{data.name}</Typography>
                    <Typography variant='body2' color='text.secondary'>
                        {data.club}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>{data.nation}</Button>
                    <Button size='small'>Detail</Button>
                </CardActions>
            </Card>
        </Grid>
      })}
    </div>
  )
}

export default TestFetch
