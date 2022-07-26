import { Skeleton, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { img, imgDetails } from "models/products";
import React from "react";

interface Props {
  data: imgDetails | undefined;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "calc(100% - 456px)",
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "12px",
    marginTop: "48px",
    padding: "0 44px",
  },
  card: {
    width: "100%",
    aspectRatio: "433.6/542",
    "& img": {
      width: "100%",
      display: "block",
      objectFit: "cover",
    },
  },
  lazyCard: {
    width: "100%",
    height: "100% !important",
    transform: "none !important",
  },
}));
const ListCard = (props: Props) => {
  const { data } = props;
  const classes = useStyles();
  const renderLazyCard = () => {
    const content = [];
      for (let i = 0; i < 4; i++)
        content.push(
          <div className={classes.card} key={i}>
            <Skeleton className={classes.lazyCard} />
          </div>
        );
    return content;
  };
  return (
    <div className={classes.root}>
      {data
        ? data.imgs.map((card:any, index:number) => {
            return (
              <div className={classes.card} key={index}>
                <img src={card.img} alt="nike" />
              </div>
            );
          })
        : renderLazyCard()
          }
    </div>
  );
};

export default ListCard;
