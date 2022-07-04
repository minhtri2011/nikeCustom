import { makeStyles } from "@mui/styles";
import ButtonCustom from "./common/ButtonCustom";

interface dataProps {
  img: string;
  title: string;
  button: string;
}
interface Props {
  data: dataProps[];
  titleComponent: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "48px 48px 0",
  },
  title: {
    textTransform: "capitalize",
    fontWeight: 500,
  },
  imgList: {
    display: "flex",
    width: "100%",
    gap: "12px",
  },
  imgItem: {
    width: "calc(50% - 6px)",
    minHeight: "300px",
    position: "relative",
    "&:nth-child(2)": {
      "& h4": {
        color: "#fff",
      },
    },
    "& img": {
      width: "100%",
      display: "block",
    },
  },
  contentItem: {
    position: "absolute",
    bottom: "48px",
    left: "48px",
  },
}));
const DoubleItems = (props: Props) => {
  const classes = useStyles();
  const { data, titleComponent } = props;
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>{titleComponent}</h2>
      <div className={classes.imgList}>
        {data.map((item, index) => {
          return (
            <div key={index} className={classes.imgItem}>
              <img src={item.img} alt="nike" />
              <div className={classes.contentItem}>
                <h4>{item.title}</h4>
                {index % 2 === 0 ? (
                  <ButtonCustom black={true} value="learn more"></ButtonCustom>
                ) : (
                  <ButtonCustom value="learn more"></ButtonCustom>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DoubleItems;
