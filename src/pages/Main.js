import React from 'react'
import Left from '../components/Left';
import Header from '../components/Header';
import Center from '../components/Center';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        display:'flex',
        width:'100%',
    }
}));

export default function Main() {
    const classes = useStyles();
    return (
        <div>
            <Header/>
            <div className={classes.container} >
            <div style={{width:'15%'}}>
            <Left/>
            </div>
            <div  style={{width:'70%',}}>
            <Center/>
            </div>
        </div>
        </div>
    )
}
