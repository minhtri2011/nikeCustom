import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useOnClickOutside } from "hooks/useOnClickOutSide";
import React, { useRef, useState } from "react";

interface Props {
sort:string,
  setSort: React.Dispatch<React.SetStateAction<string>>
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "& button": {
      fontSize: "16px",
      outline: "none",
      border: "none",
      cursor: "pointer",
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "center",
      "&:nth-child(1)": {
        color: "#111",
      },
      "&:nth-child(2)": {
        color: "#111",
      },
    },
  },
  arrow: {
    width: "14px",
    height: "14px",
    position: "relative",
    marginLeft: "10px",
    "&::before, &::after": {
      top: "50%",
      position: "absolute",
      content: "''",
      width: "9px",
      height: "2px",
      borderRadius: "50px",
      backgroundColor: "#000",
    },
    "&::before": {
      left: "0%",
      transform: "translate(-50%, -50%) rotate( 46deg )",
      transition: "transform .2s ease-in-out",
    },
    "&::after": {
      right: "0%",
      transform: "translate(-50%, -50%) rotate( -46deg )",
      transition: "transform .2s ease-in-out",
    },
    "&.active": {
      "&::before": {
        transform: "translate(-50%, -50%) rotate( -46deg )",
      },
      "&::after": {
        transform: "translate(-50%, -50%) rotate( 46deg )",
      },
    },
  },
  dropdown: {
    position: "absolute",
    right: 0,
    top: "100%",
    overflowY: "hidden",
  },
  dropdownContainer: {
    backgroundColor:'#fff',
    borderBottomLeftRadius: "50px",
    padding: "24px 28px 15px 24px",
    transition: "transform .3s ease, visibility 0.3s",
    transform: "translateY(-100%)",
    visibility: "hidden",
    "& button": {
      padding: "5px 0px",
      display: "block",
      whiteSpace: "nowrap",
      textAlign: "right",
      width: "100%",
      '&.active':{
        color:'#7e7e7e'
      }
    },
    ".active &": {
      transform: "translateY(0%)",
      visibility: "visible",
    },
  },
  sortName:{
    color:'#7e7e7e'
  }
}));
const SortButton = (props: Props) => {
  const {sort,setSort} = props;
  const classes = useStyles();
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const data=['Featured', 'Newest', 'Price: High-Low', 'Price: Low-High']
  
  const sortPanel=useRef(null)
  const handleOpen = () => {
    setActiveSearch(!activeSearch);
  };
  const handleClose = () => {
    setActiveSearch(false); 
  }
  useOnClickOutside(sortPanel,handleClose)
  return (
    <div ref={sortPanel} className={classes.root}>
      <button onClick={handleOpen}>
        <span>Sort by</span>
        {sort && <span>
          :
          <span className={classes.sortName}> {sort}</span>
        </span>}
        <div
          className={`${classes.arrow}${activeSearch ? " active" : ""}`}
        ></div>
      </button>
      <div className={`${classes.dropdown}${activeSearch ? " active" : ""}`}>
        <div className={classes.dropdownContainer}>
          {data.map((item:string) => <button className={sort===item?'active':''} key={item} onClick={()=>setSort(item)}>{item}</button>)}
        </div>
      </div>
    </div>
  );
};

export default SortButton;
