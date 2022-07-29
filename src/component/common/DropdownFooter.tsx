import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Theme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {}
interface listDropdown {
  title: string;
  firstData: firstData[];
  secondData: secondData[];
}
interface firstData {
  title: string;
  link: string;
}
interface secondData {
  title: string;
  link: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    maxWidth: "920px",
    margin: "0 auto 50px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    "&:hover": {
      "& div div": {
        maxHeight: "200px",
        opacity: 1,
        transition: "max-height .2s ease-in-out .3s, opacity .2s linear .3s",
      },
    },
  },
  link: {
    textDecoration: "none",
    display: "block",
    color: "#757575",
    marginBottom: "12px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    textTransform: "capitalize",
  },
  listLink: {
    width: "calc(100% / 4)",
    textTransform: "capitalize",
    "& h4": {
      fontWeight: "normal",
      color: "#000",
    },
    "& div": {
      maxHeight: "0px",
      opacity: 0,
      overflowY: "hidden",
      transition: "max-height .4s ease-in-out .5s, opacity .5s linear .3s",
    },
  },
  expandedMenu: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
}));

const DropdownFooter = (props: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<string | false>();
  const data = [
    {
      title: "icons",
      firstData: [
        {
          title: "air force 1",
          link: "/",
        },
        {
          title: "huarache",
          link: "/",
        },
        {
          title: "air max 90",
          link: "/",
        },
        {
          title: "air max 95",
          link: "/",
        },
      ],
      secondData: [
        {
          title: "air max 97",
          link: "/",
        },
        {
          title: "air max 270",
          link: "/",
        },
        {
          title: "air max 720",
          link: "/",
        },
        {
          title: "all air max",
          link: "/",
        },
        {
          title: "vapomax",
          link: "/",
        },
      ],
    },
    {
      title: "shoes",
      firstData: [
        {
          title: "all shoes",
          link: "/",
        },
        {
          title: "custom shoes",
          link: "/",
        },
        {
          title: "jordan shoes",
          link: "/",
        },
        {
          title: "running shoes",
          link: "/",
        },
      ],
      secondData: [
        {
          title: "basketball shoes",
          link: "/",
        },
        {
          title: "football shoes",
          link: "/",
        },
        {
          title: "gym & training",
          link: "/",
        },
        {
          title: "lifestyle shoes",
          link: "/",
        },
      ],
    },
    {
      title: "clothing",
      firstData: [
        {
          title: "all clothing",
          link: "/",
        },
        {
          title: "modest wear",
          link: "/",
        },
        {
          title: "hoodies & pullovers",
          link: "/",
        },
        {
          title: "shirts & tops",
          link: "/",
        },
      ],
      secondData: [
        {
          title: "jackets",
          link: "/",
        },
        {
          title: "compression & nike pro",
          link: "/",
        },
        {
          title: "trousers & leggings",
          link: "/",
        },
        {
          title: "shorts",
          link: "/",
        },
      ],
    },
    {
      title: "Kids`",
      firstData: [
        {
          title: "infant & toddler shoes",
          link: "/",
        },
        {
          title: "Kids` shoes",
          link: "/",
        },
        {
          title: "kids` jordan shoes",
          link: "/",
        },
        {
          title: "kids` basketball",
          link: "/",
        },
      ],
      secondData: [
        {
          title: "kids` Running",
          link: "/",
        },
        {
          title: "kids` clothing",
          link: "/",
        },
        {
          title: "kids` backpacks",
          link: "/",
        },
        {
          title: "kids` socks",
          link: "/",
        },
      ],
    },
  ];
  const renderFirstData = (value: firstData[]) => {
    return value.map((item: firstData, index: number) => {
      return (
        <Link key={index} to='/products' className={classes.link}>
          {item.title}
        </Link>
      );
    });
  };
  const renderSecondData = (value: secondData[]) => {
    return value.map((item: firstData, index: number) => {
      return (
        <Link key={index} to='/products' className={classes.link}>
          {item.title}
        </Link>
      );
    });
  };
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  return (
    <ContainerCustom mgt={true}>
      <div className={classes.root}>
        {data.map((item: listDropdown, index: number) => {
          return (
            <div key={index} className={classes.listLink}>
              <h4>{item.title}</h4>
              {renderFirstData(item.firstData)}
              <div>{renderSecondData(item.secondData)}</div>
            </div>
          );
        })}
      </div>
      <div className={classes.expandedMenu}>
        {data.map((item: listDropdown, index: number) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === item.title}
              onChange={handleChange(item.title)}
              disableGutters={true}
              sx={{
                border: "none",
                boxShadow: "none",
                "&::before": { backgroundColor: "transparent" },
              }}
            >
              <AccordionSummary
                sx={{
                  textTransform: "capitalize",
                  padding: "0",
                  color: "#000",
                }}
              >
                {item.title}
              </AccordionSummary>
              <AccordionDetails>
                {renderFirstData(item.firstData)}
                {renderSecondData(item.secondData)}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </ContainerCustom>
  );
};

export default DropdownFooter;
