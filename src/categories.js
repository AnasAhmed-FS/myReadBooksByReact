import React from "react";

import { NavLink } from "react-router-dom";
import ArrowBack from "./icons/add.svg";

import { CurrentReading } from "./categoriesParts /currentReading";
import WantToRead from "./categoriesParts /wantToRead";
import { Read } from "./categoriesParts /read";
export default function Categories({ incomingDataApi, catchingChangesValues }) {
  return (
    <div>
      {/* --------------------------  CurrentReading  ----------------------------------- */}
      <CurrentReading
        incomingDataApi={incomingDataApi}
        catchingChangesValues={catchingChangesValues}
      />

      {/* --------------------------  wantToRead  ----------------------------------- */}
      <WantToRead
        incomingDataApi={incomingDataApi}
        catchingChangesValues={catchingChangesValues}
      />

      {/* --------------------------  Read  ----------------------------------- */}
      <Read
        incomingDataApi={incomingDataApi}
        catchingChangesValues={catchingChangesValues}
      />

      {/* Line below hepls to redirect the searchBook page  */}
      <NavLink to={"/search"}>
        <img
          src={ArrowBack}
          alt="Nothing"
          className="fixed bg-blue-600 cursor-pointer rounded-xl p-2 shadow-2xl w-7 sm:w-8 md:w-10 bottom-5 right-7"
        />
      </NavLink>
    </div>
  );
}
