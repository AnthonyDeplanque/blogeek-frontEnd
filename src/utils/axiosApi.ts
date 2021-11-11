import axios from "axios"

export const fetchApi = (route: string) => {
  return axios
    .get(`${process.env.REACT_APP_API_ROUTE}${route}`)
    .then(res => res);
}


export const postApi = (route: string, data: any) => {
  return axios
    .post(
      `${process.env.REACT_APP_API_ROUTE}${route}`,
      data)
    .then(res => res);
}


export const putApi = (route: string, id: string, data: any) => {
  return axios
    .put(`${process.env.REACT_APP_API_ROUTE}${route}/${id}`,
      data)
    .then(res => res);
}