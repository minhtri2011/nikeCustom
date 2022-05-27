import { makeStyles } from "@mui/styles";
import React from "react";
import BrandHeader from "./BrandHeader";

interface Props {}

const useStyles = makeStyles((theme) => ({
  
}));

const Header = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <BrandHeader/>
    </div>
  );
};

export default Header;
