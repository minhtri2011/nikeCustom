import React from 'react'
import { Outlet } from 'react-router';
import { makeStyles } from 'tss-react/mui'
import Menu from './component/Menu';
import NavBar from './component/NavBar';

type Props = {}
const useStyles = makeStyles()((theme) => ({
  root:{}
}));
const Admin = (props: Props) => {
  const {classes}=useStyles()
  return (
    <div>
      {/* <NavBar/> */}
      <Menu/>
      <Outlet/>
    </div>
  )
}

export default Admin