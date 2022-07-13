import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Theme,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { makeStyles } from "@mui/styles";
import { filter } from "pages/Products/Products";
import CollapseCheckBox from "./CollapseCheckBox";

interface Props {
  drawerWidth: number;
  colors: string[];
  open: boolean;
  menu: string[];
  brands: string[];
  sports: string[];
  athletes: string[];
  bestfor: string[];
  collaborator: string[];
  setFiltter: React.Dispatch<
    React.SetStateAction<{
      typeProduct: string[];
      gender: string[];
      listColor: string[];
    }>
  >;
  filter: filter;
}

const useStyles = makeStyles((theme: Theme) => ({
  colorList: {
    display: "flex",
    flexWrap: "wrap",
  },
  toggleBtn: {
    width: "calc(100% / 3 )",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
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
}));

const LeftPanel = (props: Props) => {
  const {
    drawerWidth,
    menu,
    colors,
    open,
    brands,
    sports,
    athletes,
    bestfor,
    collaborator,
    setFiltter,
    filter,
  } = props;
  const classes = useStyles();
  const customToggleButton = (value: string) => {
    return value !== "Multi" ? (
      <Button
        disableRipple
        key={value}
        className={classes.toggleBtn}
        onClick={() => handleFilterColor(value)}
      >
        <div style={{ backgroundColor: value }}></div>
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
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          height: "100vh",
          top: "0px",
          position: "sticky",
          flexShrink: 0,
          width: drawerWidth,
          boxSizing: "border-box",
          border: "none",
          marginTop: "20px",
          overflowY: "auto",
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
            color: "#7e7e7e",
            boxShadow: "inset 0 0 0 20px",
          },
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <List sx={{ marginBottom: "30px" }}>
        {menu.map((text, index) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => handleFilterTypeProduct("typeProduct", text)}
          >
            <ListItemButton
              sx={{ padding: 0, "&:hover": { backgroundColor: "transparent" } }}
            >
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Accordion disableGutters defaultExpanded sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
          <p>Gender</p>
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, display: "flex", flexDirection: "column" }}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Men" />
            <FormControlLabel control={<Checkbox />} label="Women" />
            <FormControlLabel control={<Checkbox />} label="Unisex" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Divider />
      <Accordion disableGutters defaultExpanded sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
          <p>Kids</p>
        </AccordionSummary>
        <AccordionDetails
          sx={{ padding: 0, display: "flex", flexDirection: "column" }}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Boys" />
            <FormControlLabel control={<Checkbox />} label="Girls" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Divider />
      <Accordion disableGutters defaultExpanded sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
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
      <Accordion disableGutters defaultExpanded sx={{ boxShadow: "none" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
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
    </Drawer>
  );
};

export default LeftPanel;
