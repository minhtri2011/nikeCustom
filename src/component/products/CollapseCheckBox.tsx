import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Theme,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { makeStyles } from "@mui/styles";

interface Props {
  title: string;
  arr: string[];
}

const useStyles = makeStyles((theme: Theme) => ({
  hideColumn: {
    display: "flex",
    flexDirection: "column",
    visibility: "hidden",
    height: "0px",
    "&.active": {
      visibility: "visible",
      height: "auto",
    },
  },
  btn: {
    cursor: "pointer",
  },
}));

const CollapseCheckBox = (props: Props) => {
  const { title, arr } = props;
  const classes = useStyles();
  const arrShow = arr.slice(0, 4);
  const arrHide = arr.slice(4);
  const [active, setActive] = useState<boolean>(false);
  const handleDisabledCollapse = () => {
    setActive(false);
  };
  const handleActiveCollapse = () => {
    setActive(true);
  };
  const handleChange = () => {
    setActive(!active);
  };
  return (
    <Accordion disableGutters defaultExpanded sx={{ boxShadow: "none" }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
        <p>{title}</p>
      </AccordionSummary>
      <AccordionDetails
        sx={{ padding: 0, display: "flex", flexDirection: "column" }}
      >
        <FormGroup>
          {arrShow.map((item, index) => {
            return (
              <FormControlLabel
                key={index}
                control={<Checkbox />}
                label={item}
              />
            );
          })}
          <Accordion
            disableGutters
            sx={{
              boxShadow: "none",
              display: "flex",
              flexDirection: "column-reverse",
            }}
            expanded={active}
            onChange={handleChange}
          >
            <AccordionSummary sx={{ padding: 0 }}>
              {active ? (
                <p className={classes.btn} onClick={handleDisabledCollapse}>
                  - Less
                </p>
              ) : (
                <p className={classes.btn} onClick={handleActiveCollapse}>
                  + More
                </p>
              )}
            </AccordionSummary>
            <AccordionDetails
              sx={{ padding: 0, display: "flex", flexDirection: "column" }}
            >
              {arrHide.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    control={<Checkbox />}
                    label={item}
                  />
                );
              })}
            </AccordionDetails>
          </Accordion>
        </FormGroup>
      </AccordionDetails>
    </Accordion>
  );
};

export default CollapseCheckBox;
