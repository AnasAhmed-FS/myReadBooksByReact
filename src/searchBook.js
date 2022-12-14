import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ArrowBack from "./icons/arrow-back.svg";
import { NavLink } from "react-router-dom";

export default function SearchBook({ incomingDataApi, catchingChangesValues }) {
  // Input values from search field is comming here
  const [inputVal, setInputVal] = useState("");
  const searchVal = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };

  // Filltering to search
  const searchInput =
    inputVal === ""
      ? incomingDataApi
      : incomingDataApi.filter((e) =>
          e.title.toLowerCase().includes(inputVal.toLowerCase().trim())
        );

  return (
    <div>
      {/* Search Fileds with there elemnts */}
      <div className="flex flex-row shadow-2xl mb-5">
        <NavLink to={"/"}>
          <img src={ArrowBack} alt="Nothing" className=" cursor-pointer w-9" />
        </NavLink>
        <Form className="  w-full ">
          <Form.Group className="  " controlId="formBasicEmail">
            <Form.Control
              type="text"
              onChange={(e) => searchVal(e)}
              placeholder="Book Name"
              className="rounded-none"
            />
          </Form.Group>
        </Form>
      </div>

      {/* All books inside api will apear in this section */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 max-w-2xl mx-auto">
        {searchInput.map((respons) => (
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
              <div className="  absolute top-40    ">
                <DropdownButton
                  id="dropdown-menu-align-left"
                  onSelect={(e) => catchingChangesValues(e, respons)}
                  className="  "
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
            <div className="flex flex-col  text-center  rounded-lg">
              <h2 className="font-medium text-lg  pb-2 pt-2">
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
