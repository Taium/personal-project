import { makeAxiosRequest } from "../../utils/AxiosRequest";

export const getOrderList = async (data:any) => {
    return await makeAxiosRequest("get", "/api/private/service/v1/manage/orders/getAll", "",data);
  };
  export const getOrderDetails = async (data:any) => {
    return await makeAxiosRequest("get", "/api/private/service/v1/manage/orders/getOrderDetails", "",data);
  };