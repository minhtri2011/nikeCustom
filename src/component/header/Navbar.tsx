import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { navbar } from "./Header";
import HoverMenu from "./HoverMenu";

interface Props {
  data: navbar[];
  animate: number;
  setAnimate: React.Dispatch<React.SetStateAction<number>>;
}

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: "#fff",
    position: "relative",
    height: "60px",
    width: "100%",
    transition: "transform .15s ease",
    padding: "0 38px 0 36px",
  },
  icon: {
    padding: "0 12px",
    height: "100%",
  },
  navHover: {
    position: "absolute",
    inset: 0,
    display: "flex",
    justifyContent: "center",
  },
  navTitleList: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    padding: 0,
    margin: 0,
    width: "fit-content",
    "& ul": {
      listStyle: "none",
      display: "flex",
    },
    "& ul , & ul li": {
      margin: 0,
    },
  },
}));
const Navbar = (props: Props) => {
  const { data,animate,setAnimate } = props;
  const classes = useStyles();
  return (
    <div className={classes.navbar}>
      <div className={classes.icon}>
        <svg
          className="pre-logo-svg"
          width="60px"
          height="60px"
          viewBox="0 0 64 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2234_3616)">
            <path
              d="M37.1712 18.6259C37.8461 17.9897 38.4343 17.2673 38.9203 16.4773C39.4601 15.6057 39.9084 14.6807 40.2582 13.717C40.6096 12.7452 40.871 11.7433 41.039 10.7237C41.2072 9.7347 41.2943 8.73361 41.2993 7.73043C41.3098 6.68496 41.1691 5.64346 40.8816 4.63825C40.6244 3.74361 40.1893 2.91009 39.6023 2.18768C39.0141 1.48757 38.2703 0.934898 37.4302 0.573914C36.4769 0.174602 35.4507 -0.0208935 34.4174 -1.32568e-05C33.3902 -0.0101508 32.3717 0.189116 31.4241 0.585627C30.5325 0.968575 29.7153 1.50559 29.01 2.17206C28.2933 2.85524 27.674 3.63386 27.1698 4.48599C26.6464 5.35965 26.2159 6.28566 25.8853 7.24891C25.6494 7.93523 25.4543 8.63487 25.3009 9.34419C24.6833 8.43885 23.8142 7.73402 22.8009 7.31658C22.103 7.02891 21.3551 6.88207 20.6002 6.88451C20.141 6.88083 19.6821 6.91041 19.2272 6.973C18.8547 7.02381 18.4887 7.11412 18.1353 7.2424C17.8892 7.33351 17.6511 7.44495 17.4234 7.57556L18.311 4.70072H26.5984L27.46 0.676726H15.2136L11.5826 12.2672H15.8773L15.9945 12.0954C16.2907 11.6293 16.6987 11.2445 17.1814 10.9762C17.6773 10.7348 18.2242 10.6165 18.7756 10.6313C19.7191 10.6313 20.4492 10.8708 20.9451 11.3419C21.4409 11.813 21.683 12.547 21.683 13.54C21.6885 14.049 21.5948 14.5543 21.4071 15.0275C21.2346 15.46 20.98 15.8551 20.6575 16.191C20.3415 16.5149 19.9647 16.7731 19.5486 16.951C19.1205 17.1336 18.6593 17.2262 18.1939 17.223C17.3388 17.223 16.6322 17.02 16.0817 16.6191C15.5611 16.2404 15.3008 15.647 15.2852 14.8076V14.4171H10.7302L10.7445 14.8219C10.8226 17.02 11.515 18.6559 12.8034 19.6866C14.0697 20.6991 15.7966 21.2132 17.9258 21.2132C19.0707 21.2232 20.2085 21.032 21.2873 20.6483C22.2846 20.2942 23.201 19.7442 23.9826 19.0307C24.616 18.4413 25.1391 17.7437 25.5274 16.9705C25.7347 17.5265 26.011 18.0543 26.3499 18.5413C27.0927 19.5833 28.1726 20.3368 29.4069 20.6744L17.7306 23.76C13.8497 24.7686 10.7315 24.6346 8.95768 23.3553C4.4027 20.0133 7.8814 13.3265 9.11515 11.3302C6.89493 13.7768 4.6734 16.2209 2.94641 18.8914C0.218634 23.0703 -0.948741 27.6474 0.891469 30.5834C4.18927 35.8776 12.1084 33.4322 17.1592 31.3018L64 11.5384L37.1712 18.6259ZM33.4218 16.4448C33.0354 16.7136 32.5865 16.8788 32.1179 16.9243C31.6494 16.9699 31.177 16.8944 30.7461 16.705C30.4684 16.5659 30.2313 16.3574 30.0576 16.0999C29.8739 15.8134 29.7479 15.4937 29.6867 15.1589C29.6069 14.7504 29.5677 14.335 29.5696 13.9187C29.5696 13.4684 29.6008 12.9023 29.6646 12.2373C29.7284 11.5722 29.8325 10.8538 29.9769 10.1133C30.1267 9.35529 30.3218 8.60693 30.5613 7.87229C30.7819 7.17935 31.081 6.5139 31.4527 5.88892C31.7645 5.35914 32.1733 4.89289 32.6579 4.51462C33.0827 4.18916 33.6051 4.01714 34.1402 4.02659C34.5236 4.01532 34.9041 4.09563 35.2503 4.26084C35.5472 4.40865 35.8046 4.62501 36.0012 4.89203C36.2104 5.18091 36.3596 5.50884 36.4398 5.85638C36.536 6.27199 36.5836 6.69737 36.5817 7.12397C36.5817 7.55084 36.5504 8.10264 36.4866 8.76376C36.4155 9.471 36.3065 10.1739 36.16 10.8695C36.0033 11.6237 35.7995 12.3675 35.5496 13.0962C35.3179 13.7851 35.0125 14.4471 34.6386 15.0704C34.3257 15.6029 33.9124 16.0696 33.4218 16.4448V16.4448Z"
              fill="#111111"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_2234_3616">
              <rect width="64" height="33.7654" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={classes.navHover}>
        <ul
          onMouseLeave={() => setAnimate(0)}
          className={`${classes.navTitleList} ${
            animate > 1 ? "isFocused" : ""
          }`}
        >
          {data.map((item, indexnav) => {
            return (
              <HoverMenu setAnimate={setAnimate} item={item} key={indexnav} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
