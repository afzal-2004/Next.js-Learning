import React, { useState } from "react";

export const Counter = () => {
  const [inetial, setinetial] = useState(0);
  const Increament = () => {
    setinetial(inetial + 1);
  };
  const Decreament = () => {
    setinetial(inetial - 1);
  };
  return (
    <div>
      <h3>Counter</h3>
      <div className=" flex  ">
        <h5 onClick={Increament}>Increase</h5>
        <h5 onClick={Decreament}>Decrease</h5>
      </div>

      <h2> {inetial}</h2>
    </div>
  );
};
