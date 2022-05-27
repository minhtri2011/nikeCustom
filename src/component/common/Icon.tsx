import React from "react";
import { makeStyles } from "tss-react/mui";
import LogoWhite from "./../../assest/iconwhite.png";
interface Props {
  type: string;
}

const useStyles = makeStyles()((theme) => ({
  root: {
    "& svg": {
      fill: theme.palette.text.primary,
    },
  },
}));

const Icon: React.FC<Props> = ({ type }) => {
  const { classes } = useStyles();
  const choseIcon = (value: string) => {
    return (
      <div className={classes.root}>
        <svg
          className="pre-logo-svg"
          height="60px"
          width="60px"
          fill="#111"
          viewBox="0 0 69 32"
        >
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
        </svg>
      </div>
    );
  };
  return <React.Fragment>{choseIcon(type)}</React.Fragment>;
};

export default Icon;
