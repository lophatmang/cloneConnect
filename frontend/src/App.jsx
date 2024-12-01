import dataProvider from './dataProvider/dataProvider';

import { Admin, Resource, Layout, defaultDarkTheme } from 'react-admin';

import CustomList from './components/CustomList/CustomList.jsx';
import CustomShow from './components/CustomShow/CustomShow.jsx';
import CustomAppBar from './components/header/CustomAppBar.jsx';
import CustomMenu from './components/header/CustomMenu.jsx';

const CustomLayout = (props) => (
  <Layout {...props} appBar={CustomAppBar} menu={CustomMenu} />
);

function App() {
  const localData = {
    ...JSON.parse(localStorage.getItem('RaStore.drives.listParams')),
    filter: {},
  };
  localStorage.setItem('RaStore.drives.listParams', JSON.stringify(localData));

  return (
    <Admin
      defaultTheme={defaultDarkTheme}
      lightTheme={defaultDarkTheme}
      dataProvider={dataProvider}
      layout={CustomLayout}
    >
      <Resource name="drives" list={CustomList} show={CustomShow} />
    </Admin>
  );
}

export default App;
