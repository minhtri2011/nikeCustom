import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ContainerCustom from "component/common/ContainerCustom";
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
  },
}));

const DropdownFooter = (props: Props) => {
  const classes = useStyles();
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
        <Link key={index} to={item.link}>
          {item.title}
        </Link>
      );
    });
  };
  const renderSecondData = (value: secondData[]) => {
    return value.map((item: firstData, index: number) => {
      return (
        <Link key={index} to={item.link}>
          {item.title}
        </Link>
      );
    });
  };
  return (
    <ContainerCustom mgt={true}>
      <div className={classes.root}>
        {data.map((item: listDropdown, index: number) => {
          return (
            <div key={index}>
              <h4>{item.title}</h4>
              {renderFirstData(item.firstData)}
              {renderSecondData(item.secondData)}
            </div>
          );
        })}
      </div>
    </ContainerCustom>
  );
};

export default DropdownFooter;
