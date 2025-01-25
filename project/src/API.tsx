import axios from "axios";
enum REST_METHODS {
  GET = "get",
  POST = "post",
  DELETE = "delete",
  PATCH = "patch",
  PUT = "put",
}
const apiCaller = async (
    {
      method,
      params,
      url,
      data,
      headers,
    }: {
      method: REST_METHODS;
      params?: Record<string, unknown>;
      url: string;
      data?: Record<string, unknown> | FormData;
      headers?: any;
    } = {
        method: REST_METHODS.GET,
        params: {},
        data: {},
        headers: {},
        url: "",
      }
  ) => {
   
    return axios({
      method: method,
      url,
      data,
      headers,
      params,
    });
  };

  const API={
    getData: () => {
      return apiCaller({
        method: REST_METHODS.GET,
        url: `https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json`,
      });
    },
  }
  export default API