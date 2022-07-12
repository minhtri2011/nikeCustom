import React from "react";

type Props = {};

const Filter = (props: Props) => {
  return (
    <svg
      aria-hidden="true"
      className="icon-filter-ds"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      width="24px"
      height="24px"
      fill="none"
    >
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M21 8.25H10m-5.25 0H3"
      ></path>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M3 15.75h10.75m5 0H21"
      ></path>
      <path
        stroke="currentColor"
        strokeWidth="1.5"
        d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default Filter;
