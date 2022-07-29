import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";
import { ProductData } from "models/products";
import React, { ChangeEvent, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number | string;
  value: number;
}
interface Props {
  values: any[];
  setState: React.Dispatch<React.SetStateAction<ProductData>>;
  state: ProductData;
}
const useStyles = makeStyles((theme: Theme) => ({
  imgList: {
    display: "grid",
    gridTemplateColumns: "repeat(5,1fr)",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom:'20px',
    marginTop:'20px',
    [theme.breakpoints.down("md")]:{
      gridTemplateColumns: "repeat(4,1fr)",
    },
    [theme.breakpoints.down("sm")]:{
      gridTemplateColumns: "repeat(3,1fr)",
    },
  },
  img: {
    width: "100%",
    height: "100%",
  },
  activeTabs: {
    "& .MuiTabs-indicator": {
      backgroundColor: theme.palette.text.primary,
    },
    "& .Mui-selected": {
      color: theme.palette.text.primary,
      fontWeight: "bold",
    },
  },
  btn: {
    marginLeft: "5px",
    backgroundColor: theme.palette.action.active,
    color: "white",
    padding: "15px",
  },
  inputStyle: {
    maxWidth: "70%",
    '& input':{
      height:'56px'
    }
  },
  addBox: {
    display: "flex",
    justifyContent: "end",
  },
  nullImgText: {
    color: theme.palette.text.primary,
  },
  closeIcon: {
    cursor: "pointer",
    position: "absolute",
    top: "0",
    right: "0",
    backgroundColor: "grey",
    borderRadius: "50%",
    opacity: 0,
    transition: "opacity .1s ease-in-out",
  },
  imgItem: {
    width: "100p%",
    aspectRatio: "1/1",
    position: "relative",
    "&:hover svg": {
      opacity: 0.6,
    },
  },
}));

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsColor({ values, setState, state }: Props) {
  const [value, setValue] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const classes = useStyles();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handChangeInput = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setImage(event.currentTarget.value);
  };
  const submitImg = (index: number) => {
    values[index].imgs = [...values[index].imgs, { img: image }];
    setState({ ...state, imgDetails: values });
    setImage("");
  };
  const deleteImg = (index: number) => {
    values[index].imgs.splice(index, 1);
    setState({ ...state, imgDetails: values });
    setImage("");
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          {values?.map((item, index) => {
            return <Tab key={index} label={item.color} {...a11yProps(index)} />;
          })}
        </Tabs>
      </Box>
      {values?.map((item, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            <div className={classes.addBox}>
              <TextField
                id="outlined-basic-add-img"
                label="Link image"
                variant="outlined"
                value={image}
                onChange={handChangeInput}
                className={classes.inputStyle}
              />
              <Button
                onClick={() => submitImg(index)}
                variant="contained"
                size="large"
                className={classes.btn}
              >
                Add
              </Button>
            </div>
            <div className={classes.imgList}>
              {item.imgs.length > 0 ? (
                item.imgs.map((item: any, index: any) => (
                  <div key={index} className={classes.imgItem}>
                    <img
                      src={item.img}
                      alt={item.img}
                      className={classes.img}
                    />
                    <CloseIcon
                      className={classes.closeIcon}
                      onClick={() => deleteImg(index)}
                    />
                  </div>
                ))
              ) : (
                <Typography variant="caption" className={classes.nullImgText}>
                  no image here
                </Typography>
              )}
            </div>
          </TabPanel>
        );
      })}
    </Box>
  );
}
