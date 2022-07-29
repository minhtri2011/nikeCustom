import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import MemberNav from 'component/common/MemberNav'
import React from 'react'

type Props = {}

const useStyles=makeStyles((theme:Theme)=>({
    root:{
        textAlign: 'center',
        margin:'120px auto 500px',
        padding:'0 18px',
        '& h3':{
            fontSize:'28px',
            paddingBottom:'16px',
        },
        '& p':{
            fontSize:'20px',
        }
    }
}))
const Inbox = (props: Props) => {
    const classes= useStyles();
  return (
    <>
    <MemberNav/>
    <div className={classes.root}>
        <h3>No Messages</h3>
        <p>Messages and notifications from Nike will show up here.</p>
    </div></>
  )
}

export default Inbox