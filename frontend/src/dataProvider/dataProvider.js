import { fetchUtils } from "react-admin";
// import { stringify } from "query-string";

const apiUrl = "http://localhost:3100";
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
      console.log(pageSize[0], pageSize[1]);
      return {
        data: json.slice(pageSize[0], pageSize[1]),
        total: json.length,
      };
    });
  },
  // Implement other methods (getOne, getMany, create, update, delete)...
};

export default dataProvider;
