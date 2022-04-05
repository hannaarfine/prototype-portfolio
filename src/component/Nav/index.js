import React, { useEffect, useState, useRef } from "react";
import { NavLayout, Hanna, Margot, Dash } from "./styles";
import { Link, useHistory } from "react-router-dom";

export const Nav = ({ active }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <NavLayout>
      <button onClick={scrollToTop}>
        <Hanna $active={active === "hanna" || active === "both"}>Hanna</Hanna>{" "}
        <Dash>|</Dash>{" "}
        <Margot $active={active === "margot" || active === "both"}>
          Margot
        </Margot>
      </button>
    </NavLayout>
  );
};
