import { HttpModuleOptions } from '@nestjs/axios';

const getAxiosConfig = (baseURL: string): HttpModuleOptions => {
  return {
    baseURL,
    transformResponse: (resp) => {
      const data = JSON.parse(resp);
      data.id = data?._id ? data._id : undefined;
      return data;
    },
  };
};

export default getAxiosConfig;
