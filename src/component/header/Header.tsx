import { makeStyles } from "@mui/styles";
import { useState } from "react";
import BrandHeader from "./BrandHeader";
import Navbar from "./Navbar";

interface Props {}
export interface itemNav {
  name: string;
}
export interface navbarData {
  title: string;
  item: itemNav[];
  title2?: string;
  item2?: itemNav[];
}
export interface navbar {
  title: string;
  link:string;
  data?: navbarData[];
}

const useStyles = makeStyles((theme) => ({
  root: {},
  backdropMenu: {
    position: "fixed",
    inset: 0,
    backgroundColor: "hsla(0,0%,7%,.36)",
    zIndex: "1",
    backdropFilter: "blur(0px)",
    opacity: 0,
    visibility: "hidden",
    transition: "all .5s",
    "&.active": {
      opacity: 1,
      visibility: "visible",
      backdropFilter: "blur(4px)",
    },
  },
}));

const Header = (props: Props) => {
  const classes = useStyles();
  const [active, setActive] = useState<boolean>(false);
  const navbar = [
    {
      title: "Men",
      link:'/men',
      data: [
        {
          title: "New & Featured",
          item: [
            {
              name: "New Releases",
            },
            {
              name: "SNKRS Launch Calendar",
            },
            {
              name: "Member Access",
            },
            {
              name: "Air Force 1",
            },
            {
              name: "Basic Essentials",
            },
            {
              name: "Football Club Kits",
            },
            {
              name: "Sustainable Materials",
            },
            {
              name: "Top Picks Under 2,300,000đ",
            },
            {
              name: "Last Sizes Available",
            },
            {
              name: "Sale",
            },
          ],
        },
        {
          title: "Shoes",
          item: [
            {
              name: "Newest Sneakers",
            },
            {
              name: "All Shoes",
            },
            {
              name: "Lifestyle",
            },
            {
              name: "Running",
            },
            {
              name: "Basketball",
            },
            {
              name: "Jordan",
            },
            {
              name: "Football",
            },
            {
              name: "Gym and Training",
            },
            {
              name: "Skateboarding",
            },
            {
              name: "Tennis",
            },
            {
              name: "Sandals and Slides",
            },
            {
              name: "Customise with Nike By You",
            },
            {
              name: "All Sale Shoes",
            },
          ],
        },
        {
          title: "Clothing",
          item: [
            {
              name: "All Clothing",
            },
            {
              name: "Tops and T-Shirts",
            },
            {
              name: "Jerseys and Kits",
            },
            {
              name: "Hoodles and Sweatshirts",
            },
            {
              name: "Jackets and Gilets",
            },
            {
              name: "Pants and Leggings",
            },
            {
              name: "Tracksuits",
            },
            {
              name: "Compression and Base Layer",
            },
            {
              name: "Shorts",
            },
            {
              name: "Caps",
            },
            {
              name: "Socks",
            },
            {
              name: "Bags and Backpacks",
            },
            {
              name: "Accessories and Equipment",
            },
            {
              name: "All Sale Clothing",
            },
          ],
        },
        {
          title: "Shop By Sport",
          item: [
            {
              name: "Running",
            },
            {
              name: "Football",
            },
            {
              name: "Basketball",
            },
            {
              name: "Gym and Training",
            },
            {
              name: "Yoga",
            },
            {
              name: "Skateboarding",
            },
            {
              name: "Tennis",
            },
            {
              name: "Golf",
            },
          ],
          title2: "Shop By Brand",
          item2: [
            {
              name: "Nike Sportswear",
            },
            {
              name: "NikeLab",
            },
            {
              name: "Nike By you",
            },
            {
              name: "Jordan",
            },
            {
              name: "ACG",
            },
            {
              name: "NBA",
            },
            {
              name: "NikeSB",
            },
          ],
        },
        {
          title: "Icons",
          item: [
            { name: "Air Force 1" },
            { name: "Pegasus" },
            { name: "Blaszer" },
            { name: "Air Jordan 1" },
            { name: "Air Max" },
          ],
        },
      ],
    },
    {
      title: "Women",
      link:'/women',
      data: [
        {
          title: "New & Featured",
          item: [
            {
              name: "New Releases",
            },
            {
              name: "SNKRS Launch Calendar",
            },
            {
              name: "Member Access",
            },
            {
              name: "Air Force 1",
            },
            {
              name: "Basic Essentials",
            },
            {
              name: "Bra and Legging Duos",
            },
            {
              name: "Sustainable Materials",
            },
            {
              name: "Top Picks Under 2,300,000đ",
            },
            {
              name: "Last Sizes Available",
            },
            {
              name: "Sale",
            },
          ],
        },
        {
          title: "Shoes",
          item: [
            {
              name: "All Shoes",
            },
            {
              name: "Lifestyle",
            },
            {
              name: "Running",
            },
            {
              name: "Gym and Training",
            },
            {
              name: "Jordan",
            },
            {
              name: "Football",
            },
            {
              name: "Basketball",
            },
            {
              name: "Skateboarding",
            },
            {
              name: "Tennis",
            },
            {
              name: "Sandals and Slides",
            },
            {
              name: "Customise with Nike By You",
            },
            {
              name: "All Sale Shoes",
            },
          ],
        },
        {
          title: "Clothing",
          item: [
            {
              name: "All Clothing",
            },
            {
              name: "Sports Bras",
            },
            {
              name: "Tops and T-Shirts",
            },
            {
              name: "Hoodles and Sweatshirts",
            },
            {
              name: "Jackets and Gilets",
            },
            {
              name: "Pants and Leggings",
            },
            {
              name: "Tracksuits",
            },
            {
              name: "Compression and Base Layer",
            },
            {
              name: "Shorts",
            },
            {
              name: "Skirt and Dresses",
            },
            {
              name: "Jerseys and Kits",
            },
            {
              name: "Modest Wear",
            },
            {
              name: "Plus size",
            },
            {
              name: "Caps",
            },
            {
              name: "Socks",
            },
            {
              name: "Bags and Backpacks",
            },
            {
              name: "Accessories and Equipment",
            },
            {
              name: "All Sale Clothing",
            },
          ],
        },
        {
          title: "Shop By Sport",
          item: [
            {
              name: "Running",
            },
            {
              name: "Gym and Training",
            },
            {
              name: "Yoga",
            },
            {
              name: "Football",
            },
            {
              name: "Basketball",
            },
            {
              name: "Skateboarding",
            },
            {
              name: "Tennis",
            },
            {
              name: "Golf",
            },
          ],
          title2: "Shop By Brand",
          item2: [
            {
              name: "Nike Sportswear",
            },
            {
              name: "NikeLab",
            },
            {
              name: "Nike By you",
            },
            {
              name: "Jordan",
            },
            {
              name: "ACG",
            },
            {
              name: "NBA",
            },
            {
              name: "NikeSB",
            },
          ],
        },
        {
          title: "Icons",
          item: [
            { name: "Air Force 1" },
            { name: "Pegasus" },
            { name: "Blaszer" },
            { name: "Air Jordan 1" },
            { name: "Air Max" },
          ],
        },
      ],
    },
    {
      title: "Kids",
      link:'/kids',
      data: [
        {
          title: "New & Featured",
          item: [
            {
              name: "New Releases",
            },
            {
              name: "Member Access",
            },
            {
              name: "Air Force 1",
            },
            {
              name: "Bags and Backpacks",
            },
            {
              name: "Jordan",
            },
            {
              name: "Last Sizes Available",
            },
            {
              name: "Sale",
            },
          ],
        },
        {
          title: "Boys' Shoes",
          item: [
            {
              name: "Older Kids (3-6.5)",
            },
            {
              name: "Younger Kids (10-2.5)",
            },
            {
              name: "Baby and Toddler (1.5-9.5)",
            },
            {
              name: "Lifestyle",
            },
            {
              name: "Running",
            },
            {
              name: "Basketball",
            },
            {
              name: "Jordan",
            },
            {
              name: "Football",
            },
            {
              name: "Sandals and Slides",
            },
            {
              name: "All Shoes",
            },
          ],
          title2: "Boys' Clothing",
          item2: [
            { name: "Tops and T-Shirts" },
            { name: "Hoodies and Sweatshirts" },
            { name: "Pants and Leggings" },
            { name: "Shorts" },
            { name: "All Boys' Clothing" },
          ],
        },
        {
          title: "Girls' Shoes",
          item: [
            {
              name: "Older Kids (3-6.5)",
            },
            {
              name: "Younger Kids (10-2.5)",
            },
            {
              name: "Baby and Toddler (1.5-9.5)",
            },
            {
              name: "Lifestyle",
            },
            {
              name: "Running",
            },
            {
              name: "Basketball",
            },
            {
              name: "Football",
            },
            {
              name: "Sandals and Slides",
            },
            {
              name: "All Shoes",
            },
          ],
          title2: "Girls' Clothing",
          item2: [
            { name: "Tops and T-Shirts" },
            { name: "Sports Bras" },
            { name: "Hoodies and Sweatshirts" },
            { name: "Pants and Leggings" },
            { name: "Shorts" },
            { name: "All Boys' Clothing" },
          ],
        },
        {
          title: "Accessories and equipment",
          item: [
            { name: "Balls" },
            { name: "Bags and Backpacks" },
            { name: "Shocks" },
            { name: "Hats and Headwear" },
          ],
          title2: "Shop By Sport",
          item2: [
            { name: "Running" },
            { name: "Football" },
            { name: "Basketball" },
            { name: "Gym and Training" },
            { name: "Tennis" },
          ],
        },
      ],
    },
    {
      title: "Customise",
      link:'/',
      data: [
        { title: "Featured", item: [{ name: "Nike By You New Releases" }] },
        { title: "Nike By You", item: [{ name: "Men" }, { name: "Women" }] },
        {
          title: "By Sport",
          item: [
            {
              name: "Lifestyle",
            },
            { name: "Running" },
            { name: "Basketball" },
            { name: "Football" },
          ],
        },
        {
          title: "Icons",
          item: [
            { name: "Air Max" },
            { name: "Air Force 1" },
            { name: "Free" },
            { name: "Flyknit" },
          ],
        },
      ],
    },
    {
      title: "Sale",
      link:'/',
      data: [
        {
          title: "Featured",
          item: [{ name: "Shop All Sale" }],
        },
        {
          title: "Men's Sale",
          item: [
            { name: "Shoes" },
            { name: "Clothing" },
            { name: "Accessories and Equipment" },
          ],
        },
        {
          title: "Women's Sale",
          item: [
            { name: "Shoes" },
            { name: "Clothing" },
            { name: "Accessories and Equipment" },
          ],
        },
        {
          title: "Kids' Sale",
          item: [
            { name: "Shoes" },
            { name: "Clothing" },
            { name: "Accessories and Equipment" },
          ],
        },
      ],
    },
    {
      title: "SNKRS",
      link:'/'
    },
  ];
  const [animate, setAnimate] = useState(0);
  return (
    <div className={classes.root}>
      <BrandHeader />
      <Navbar
        setBackdrop={setActive}
        data={navbar}
        animate={animate}
        setAnimate={setAnimate}
      />
      <div
        id="backdrop"
        className={`${classes.backdropMenu}${active ? " active" : ""}`}
      ></div>
    </div>
  );
};


export default Header;
