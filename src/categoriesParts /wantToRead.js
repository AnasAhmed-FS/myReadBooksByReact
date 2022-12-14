import React from "react";

import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
export default function WantToRead({ incomingDataApi, catchingChangesValues }) {
  return (
    <div>
      {/* --------------------------  wantToRead  ----------------------------------- */}

      <div>
        <h1 className="font-medium uppercase text-center">Want To Read</h1>
        <hr className="w-1/2 mx-auto " />
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {incomingDataApi
          .filter((cr) => cr.shelf === "wantToRead")
          .map((respons) => (
            // Catch each book with details in the api
            <li key={respons.id} className=" flex flex-col pb-5   mx-auto p-2">
              <div className="relative">
                {/* Here image about each book  */}
                <img
                  src={respons.imageLinks.thumbnail}
                  className="w-40 h-48 pb-1 rounded-md rounded-b-none mx-auto"
                  alt="Browser can not appear the img "
                />

                {/* Here all option categories  */}
                <div className="  absolute top-40">
                  <DropdownButton
                    id="dropdown-menu-align-right"
                    onSelect={(e) => catchingChangesValues(e, respons)}
                  >
                    <Dropdown.Item eventKey="currentlyReading">
                      currentlyReading
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="wantToRead">
                      wantToRead
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="read">read</Dropdown.Item>
                  </DropdownButton>
                </div>
              </div>
              {/* book details */}
              <div className="flex flex-col  text-center  ">
                <h2 className="font-medium uppercase text-lg pb-2 pt-2">
                  {respons.title}
                </h2>
                <h4 className="font-mono text-xs text-slate-600">
                  {respons.authors[0]}
                </h4>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
