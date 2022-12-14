import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";
import Categories from "./categories";
import SearchBook from "./searchBook";

function App() {
  // States for all data is coming from api
  const [apiResponses, setApiResponses] = useState([]);
  //console.log(apiResponses);

  // States to put selected options inside state
  const [valueOption, setValueOption] = useState("");
  // Any change in id book, will put here
  const [changeId, setChangeId] = useState("");

  // Any data changes is coming inside parameters from components, will arrive here
  const handleSelect = (option, idBook) => {
    setValueOption(option);
    setChangeId(idBook);
  };
  useEffect(() => {
    // Get all data from api
    const check = async () => {
      const responses = await getAll();
      setApiResponses(responses);
      //console.log(responses[0].authors[0]);
    };
    check();

    // Change values inside api
    const changeSel = async () => {
      await update(changeId, valueOption);
    };
    changeSel();
  }, [valueOption, changeId, apiResponses]);

  return (
    <div className="">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Categories
                incomingDataApi={apiResponses}
                catchingChangesValues={handleSelect}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <SearchBook
                incomingDataApi={apiResponses}
                catchingChangesValues={handleSelect}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
