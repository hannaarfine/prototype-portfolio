import React, { useEffect, useState, useRef } from "react";
import { NavLayout, Links, Headline } from "./styles";
import { Link, useHistory } from "react-router-dom";

export const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <NavLayout>
      {/* <Link to="/">Hanna | Margot</Link> */}
      <button onClick={scrollToTop}>Hanna | Margot</button>
    </NavLayout>
  );
};
