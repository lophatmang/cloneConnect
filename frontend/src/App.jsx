import dataProvider from "./dataProvider/dataProvider";

import { Admin, Resource, Layout } from "react-admin";

import CustomList from "./components/CustomList";
import CustomShow from "./components/CustomShow/CustomShow.jsx";
import CustomAppBar from "./components/header/CustomAppBar.jsx";
const CustomLayout = (props) => <Layout {...props} appBar={CustomAppBar} />;

function App() {
  return (
    <>
      <Admin dataProvider={dataProvider} layout={CustomLayout}>
        {/* ra-data for development */}
        <Resource
          name="drives"
          options={{ label: "Demo 3X" }}
          list={CustomList}
          show={CustomShow}
        />
      </Admin>
    </>
  );
}

export default App;
