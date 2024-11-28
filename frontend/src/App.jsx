import dataProvider from "./dataProvider/dataProvider";

import { Admin, Resource } from "react-admin";

import CustomList from "./components/CustomList";
import CustomShow from "./components/CustomShow/CustomShow.jsx";

function App() {
  return (
    <>
      <Admin dataProvider={dataProvider}>
        {/* ra-data for development */}
        <Resource
          name="posts"
          options={{ label: "Demo 3X" }}
          list={CustomList}
          show={CustomShow}
        />
      </Admin>
    </>
  );
}

export default App;
