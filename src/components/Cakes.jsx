import React from "react";
import { useSelector } from "react-redux";

const Cakes = () => {
  const cake = useSelector((state) => state.cake);
  console.log(cake);
  return <div>Cakes</div>;
};

export default Cakes;
