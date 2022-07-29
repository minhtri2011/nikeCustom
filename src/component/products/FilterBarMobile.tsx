import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  Drawer,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Theme,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import Filter from "component/svg/filter";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
import { filter } from "pages/Products/Products";
import React, { useEffect, useLayoutEffect, useState } from "react";
import CollapseCheckBox from "./CollapseCheckBox";

interface Props {
  productsLength: number;
  setFiltter: React.Dispatch<
    React.SetStateAction<{
      typeProduct: string[];
      gender: string[];
      listColor: string[];
    }>
  >;
  filter: filter;
  colors: string[];
  brands: string[];
  sports: string[];
  bestfor: string[];
  athletes: string[];
  collaborator: string[];
  menu: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  scrollTool: {
    display: "flex",
    overflowY: "auto",
    marginTop: "20px",
    "&::-webkit-scrollbar": {
      appearance: "none",
      width: "5px",
      maxHeight: "20%",
    },
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0)",
    },
    "&::-webkit-scrollbar-thumb": {
      height: "100px",
      borderRadius: "50px",
      color: "transparent",
      boxShadow: "inset 0 0 0 20px",
    },
    "& p": {
      flexShrink: 0,
      padding: "0 16px 18px",
      "&:first-child": {
        paddingLeft: 0,
      },
      "&:last-child": {
        paddingRight: 0,
      },
    },
  },
  tools: {
    display: "flex",
    marginTop: "24px",
    alignItems: "center",
    justifyContent: "space-between",
    "& span": {
      color: "#757575",
    },
    "& button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "5px 20px",
      backgroundColor: "transparent",
      borderRadius: "50px",
      outline: "none",
      border: "1px solid #757575",
      fontSize: "16px",
    },
  },
  panel: {
    height: "100vh !important",
    overflowY: "auto",
    position: "relative",
  },
  titleFilter: {
    fontSize: "24px",
    fontWeight: "normal",
    padding: "36px 0 20px",
  },
  container: {
    padding: "0 20px",
  },
  closeBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: "#000",
    outline: "none",
    border: "1px solid #000",
    padding: "3px",
    "& svg": {
      fill: "#fff",
    },
  },
  toggleBtn: {
    width: "calc(100% / 3 )",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& > div": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        transform: "scale(.7)",
        display: "none",
      },
    },
    "& .active": {
      backgroundColor: "red",
      "& svg": {
        display: "block",
      },
    },
    "& div": {
      width: "25px",
      height: "25px",
      borderRadius: "50px",
      border: "1px solid #757575",
    },
    "&:active div": {
      transform: "scale(.95)",
    },
  },
  colorList: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const FilterBarMobile = (props: Props) => {
  const classes = useStyles();
  const {
    productsLength,
    filter,
    collaborator,
    setFiltter,
    colors,
    brands,
    sports,
    bestfor,
    athletes,
    menu,
  } = props;
  const [state, setState] = useState<boolean>(false);

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const arr = filter.gender;
    const index = arr.indexOf(value);
    event.target.checked ? arr.push(value) : arr.splice(index, 1);
    setFiltter({ ...filter, gender: arr });
  };
  const handleFilterColor = (value: string) => {
    if (value === "Multi") return setFiltter({ ...filter, listColor: [] });
    const arr = filter.listColor;
    const index = arr.indexOf(value);
    if (index !== -1) {
      arr.splice(index, 1);
    } else {
      arr.push(value);
    }
    setFiltter({ ...filter, listColor: arr });
  };
  const customToggleButton = (value: string) => {
    return value !== "Multi" ? (
      <Button
        disableRipple
        key={value}
        className={classes.toggleBtn}
        onClick={() => handleFilterColor(value)}
      >
        <div
          style={{ backgroundColor: value }}
          className={filter.listColor.includes(value) ? "active" : ""}
        >
          <CheckIcon sx={{ fill: value !== "white" ? "white" : "black" }} />
        </div>
        <p>{value}</p>
      </Button>
    ) : (
      <Button
        disableRipple
        key={value}
        className={classes.toggleBtn}
        onClick={() => handleFilterColor(value)}
      >
        <div
          style={{
            background:
              "radial-gradient(rgb(255, 255, 255) 20%, transparent 20%) 0px 0px / 15px 15px, radial-gradient(rgb(255, 255, 255) 20%, transparent 20%) 8px 8px, rgb(0, 0, 0)",
          }}
        ></div>
        <p>{value}</p>
      </Button>
    );
  };
  const handleFilterTypeProduct = (key: string, value: string) => {
    setFiltter({ ...filter, [key]: [value] });
  };
  const toggleDrawer = (value: boolean) => {
    setState(value);
  };
  // useLayoutEffect(() => {
  //   state
  //     ? (document.body.style.removeProperty('overflow'))
  //     : (document.body.style.overflow = "hidden");
  // }, [state]);
  const handleClickFilter = () => {
    toggleDrawer(true);
    document.body.style.removeProperty("overflow");
  };
  const handleClosePanel = () => {
    toggleDrawer(false);
    document.body.style.removeProperty("overflow");
  };
  return (
    <>
      {/* scroll menu */}
      <div className={classes.scrollTool}>
        {menu.map((item, index) => (
          <p
            key={index}
            onClick={() => handleFilterTypeProduct("typeProduct", item)}
          >
            {item}
          </p>
        ))}
      </div>
      <Divider />
      <div className={classes.tools}>
        <span>{productsLength} Results</span>
        <button onClick={handleClickFilter}>
          Filter <Filter />
        </button>
      </div>
      <Drawer
        anchor="bottom"
        open={state}
        onClose={handleClosePanel}
        transitionDuration={200}
      >
        <div className={classes.panel}>
          <button
            className={classes.closeBtn}
            onClick={() => toggleDrawer(false)}
          >
            <CloseIcon />
          </button>
          <div className={classes.container}>
            <h1 className={classes.titleFilter}>Filter</h1>

            <Divider />
            <Accordion
              disableGutters
              defaultExpanded
              sx={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: 0 }}
              >
                <p>Gender</p>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: 0, display: "flex", flexDirection: "column" }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter.gender.includes("male") ? true : false}
                        value="male"
                        onChange={handleChangeGender}
                      />
                    }
                    label="Men"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          filter.gender.includes("female") ? true : false
                        }
                        value="female"
                        onChange={handleChangeGender}
                      />
                    }
                    label="Women"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={
                          filter.gender.includes("Unisex") ? true : false
                        }
                        value="Unisex"
                        onChange={handleChangeGender}
                      />
                    }
                    label="Unisex"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Divider />
            <Accordion
              disableGutters
              defaultExpanded
              sx={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: 0 }}
              >
                <p>Kids</p>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: 0, display: "flex", flexDirection: "column" }}
              >
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={filter.gender.includes("kid") ? true : false}
                        value="kid"
                        onChange={handleChangeGender}
                      />
                    }
                    label="Boys"
                  />
                  <FormControlLabel
                    control={
                      <Checkbox value="kid" onChange={handleChangeGender} />
                    }
                    label="Girls"
                  />
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            <Divider />
            <Accordion
              disableGutters
              defaultExpanded
              sx={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: 0 }}
              >
                <p>Colour</p>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: 0, display: "flex", flexDirection: "column" }}
              >
                <div className={classes.colorList}>
                  {colors.map((color) => customToggleButton(color))}
                  {customToggleButton("Multi")}
                </div>
              </AccordionDetails>
            </Accordion>

            <Divider />
            <CollapseCheckBox title="Brand" arr={brands} />

            <Divider />
            <CollapseCheckBox title="Sports" arr={sports} />

            <Divider />
            <CollapseCheckBox title="Athletes" arr={athletes} />

            <Divider />
            <CollapseCheckBox title="Best for" arr={bestfor} />

            <Divider />
            <Accordion
              disableGutters
              defaultExpanded
              sx={{ boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: 0 }}
              >
                <p>Collaborator</p>
              </AccordionSummary>
              <AccordionDetails
                sx={{ padding: 0, display: "flex", flexDirection: "column" }}
              >
                <FormGroup>
                  {collaborator.map((cola, index) => (
                    <FormControlLabel
                      key={index}
                      control={<Checkbox />}
                      label={cola}
                    />
                  ))}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default FilterBarMobile;
