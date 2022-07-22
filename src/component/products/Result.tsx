import * as React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Theme,
} from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ContainerCustom from "component/common/ContainerCustom";
import LeftPanel from "./LeftPanel";
import ListProducts from "./ListProducts";
import { useAppSelector } from "app/hooks";
import { selectDataProductReducer } from "pages/Dashboard/Product/module/ProductSlice";
import { Product } from "models/products";
import { filter } from "pages/Products/Products";
import useCheckMaxBreakpoints from "hooks/useCheckMaxBreakpoints";
import { makeStyles } from "@mui/styles";
import FilterBarMobile from "./FilterBarMobile";
import useCheckMinBreakpoints from "hooks/useCheckMinBreakpoints";

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  setFiltter: React.Dispatch<
    React.SetStateAction<{
      typeProduct: string[];
      gender: string[];
      listColor: string[];
    }>
  >;
  listProduct: Product[];
  filter: filter;
  productsLength: number;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    [theme.breakpoints.down("md")]: {
      padding: "24px 0 24px 0 !important",
    },
  },
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function Result(props: Props) {
  const { open, filter, setOpen, setFiltter, listProduct, productsLength } =
    props;

  const menu = [
    "Shoes",
    "Sports Bras",
    "Tops & T-Shirts",
    "Hoodies & SweathiAts",
    "Jackets & Gilets",
    "Trousers & Tights",
    "Shorts",
    "Compression & Baseslayer",
    "Tracksuits",
    "Jumpsuits & Rompers",
    "Skirts & Dresses",
    "Socks",
    "Accessories & Equipment",
  ];
  const colors = [
    "purple",
    "black",
    "red",
    "orange",
    "blue",
    "white",
    "brown",
    "green",
    "yellow",
    "grey",
    "pink",
  ];
  const brands = [
    "Nike Sportswear",
    "Jordan",
    "Nike By You",
    "NikeLab",
    "ACG",
    "Nike Pro",
    "Nike",
  ];
  const sports = [
    "Lifestyle",
    "Running",
    "Training & Gym",
    "Basketball",
    "American Football",
    "Football",
    "Yoga",
    "Golf",
    "Skateboarding",
    "Tenis",
    "Athlete",
    "Waking",
    "Outdoor",
    "Volleyball",
    "Hiking",
    "Dance",
  ];
  const athletes = [
    "LeBron James",
    "Kevin Durant",
    "Kyrie Irving",
    "Paul George",
    "Tiger Woods",
    "Cristiano Ronaldo",
    "Serena Williams",
    "Rafael Nadal",
    "Naomi Osaka",
    "Kylian Mbappe",
    "RussellWestbrrok",
    "Carmelo Anthony",
    "Giannis Antetokounmpo",
    "Nyjah Huston",
  ];
  const bestfor = [
    "Warm Weather",
    "Wet Weather Conditions",
    "Cold Weather",
    "Low-Impact Activities",
    "High-Impact Activities",
  ];
  const collaborator = ["Patta", "sacai", "Off-White", "Gyakusou"];
  const maxBreakpoint = useCheckMaxBreakpoints(950);
  const minBreakpoint = useCheckMinBreakpoints(950);
  const classes = useStyles();
  return (
    <ContainerCustom>
      <>
        {minBreakpoint && (
          <FilterBarMobile
            filter={filter}
            setFiltter={setFiltter}
            productsLength={productsLength}
            colors={colors}
            brands={brands}
            sports={sports}
            bestfor={bestfor}
            athletes={athletes}
            collaborator={collaborator}
            menu={menu}
          />
        )}
      </>
      <Box sx={{ display: "flex" }}>
        {maxBreakpoint && (
          <LeftPanel
            filter={filter}
            setFiltter={setFiltter}
            menu={menu}
            colors={colors}
            drawerWidth={drawerWidth}
            open={open}
            brands={brands}
            sports={sports}
            athletes={athletes}
            bestfor={bestfor}
            collaborator={collaborator}
          />
        )}
        {/* main list product */}
        <Main open={open} className={classes.main}>
          <ListProducts listProduct={listProduct} />
        </Main>
      </Box>
    </ContainerCustom>
  );
}
