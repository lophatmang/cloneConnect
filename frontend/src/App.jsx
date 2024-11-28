import dataProvider from "./dataProvider/dataProvider";

import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";

import TestList from "./test/testlist";
import CustomList from "./components/CustomList";
import CustomShow from "./components/CustomShow/CustomShow.jsx";

function App() {
  return (
    <>
      <Admin
        dataProvider={jsonServerProvider(
          "https://jsonplaceholder.typicode.com"
        )}
      >
        {" "}
        {/* ra-data for development */}
        <Resource name="data" list={TestList}></Resource>
        <Resource name="posts" list={CustomList} show={CustomShow} />
      </Admin>
    </>
  );
}

export default App;
