import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Logo = () => {
  const { userType } = useSelector((store) => store.auth);
  return (
    <Link to={`/${userType ? userType : ""}`}>
      <div
        className="w-10 h-5 md:w-10 md:h-12"
      /><h5 className="font-display">Rentify</h5>
    </Link>
  );
};

export default Logo;
