import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider/dataProvider";
import TestList from "./test/testlist";

function App() {
  return (
    <>
      <Admin dataProvider={dataProvider}>
        <Resource name="data" list={TestList}></Resource>
      </Admin>
    </>
  );
}

export default App;
