import { fetchUtils } from "react-admin";
// import { stringify } from "query-string";

const apiUrl = `${import.meta.env.VITE_REACT_APP_BACKEND_URL}`;

const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    // const { field, order } = params.sort;
    // const query = {
    //   sort: JSON.stringify([field, order]),
    //   range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
    //   filter: JSON.stringify(params.filter),
    // };
    const pageSize = [(page - 1) * perPage, page * perPage];
    const url = `${apiUrl}/${resource}`;
    return httpClient(url).then(({ json }) => {
      return {
        data: json.slice(pageSize[0], pageSize[1]),
        total: json.length,
      };
    });
  },
  getOne: (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    console.log(resource, params);

    return httpClient(url).then(({ json }) => {
      console.log(json);
      const result = json.find((item) => item.id === +params.id);
      console.log(result);

      return {
        data: result,
      };
    });
  },
  // Implement other methods (getOne, getMany, create, update, delete)...
};

export default dataProvider;
