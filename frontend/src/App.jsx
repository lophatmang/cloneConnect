import dataProvider from './dataProvider/dataProvider';

import { Admin, Resource, Layout } from 'react-admin';

import CustomList from './components/CustomList/CustomList.jsx';
import CustomShow from './components/CustomShow/CustomShow.jsx';
import CustomAppBar from './components/header/CustomAppBar.jsx';
import CustomMenu from './components/header/CustomMenu.jsx';
import Dashboard from './components/dashboard/Dashboard.jsx';

const CustomLayout = (props) => (
  <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} />
);

function App() {
  console.log(dataProvider);
  return (
    <>
      <Admin
        dashboard={Dashboard}
        dataProvider={dataProvider}
        layout={CustomLayout}
      >
        {/* ra-data for development */}
        <Resource name="drives" list={CustomList} show={CustomShow} />
      </Admin>
    </>
  );
}

export default App;
