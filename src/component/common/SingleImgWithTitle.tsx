import React from "react";
import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Caption from "component/common/Caption";
import ContainerCustom from "component/common/ContainerCustom";

type Props = {
  img: string;
  miniTitle?: string;
  title?: string;
  content?: string;
  button: string;
  link: string;
};
const useStyles = makeStyles((theme: Theme) => ({
  img: {
    display: "block",
    cursor: "pointer",
    width: "100%",
    height: "100%",
  },
}));
const SingleImgWithTitle = (props: Props) => {
  const { img, miniTitle, title, content, button, link } = props;
  const classes = useStyles();
  return (
    <ContainerCustom>
      <img src={img} alt="nike" className={classes.img} />
      <Caption
        miniTitle={miniTitle}
        title={title}
        content={content}
        button={button}
        link={link}
      />
    </ContainerCustom>
  );
};

export default SingleImgWithTitle;
