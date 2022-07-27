import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import ButtonCustom from "./ButtonCustom";

interface Props {
  miniTitle?: string;
  title?: string;
  content?: string;
  button: string;
  link: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "75%",
    margin: "48px auto 0",
    [theme.breakpoints.down("md")]: {
      margin: "24px auto 0",
      width: "100%",
      "& h1": {
        fontSize: "48px !important",
        textAlign: "left !important",
        lineHeight: "40px !important",
      },
      "& p": {
        textAlign: "left !important",
      },
      "& button": {
        margin: "24px 0 0 !important",
      },
    },
    "& h1": {
      margin: "0 0 8px 0",
      fontWeight: "700",
      fontSize: "72px",
      lineHeight: "60px",
      textAlign: "center",
      fontFamily: `'Oswald', sans-serif`,
      whiteSpace: "pre-line",
    },
    "& p": {
      textAlign: "center",
      marginTop: "24px",
      fontSize: "16px",
      lineHeight: "24px",
      "&:nth-child(1)": {
        margin: "0 0 8px 0",
      },
    },
    "& button": {
      margin: "24px auto 0",
    },
  },
}));
const Caption = (props: Props) => {
  const { miniTitle, title, content, button, link } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {miniTitle && miniTitle.length && <p>{miniTitle}</p>}
      <h1>{title}</h1>
      <p>{content}</p>
      {link ? (
          <ButtonCustom link={link} black={true} value={button} />
      ) : (
        <ButtonCustom black={true} value={button} />
      )}
    </div>
  );
};

export default Caption;
