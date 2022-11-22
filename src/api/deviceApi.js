import { authHost, host } from './apiConfig';

export const deviceApi = {
  createType: async (type) => {
    const { data } = await authHost.post('type', type);
    return data;
  },
  getTypes: async () => {
    const { data } = await authHost.get('type');
    return data;
  },
  createBrand: async (brand) => {
    const { data } = await authHost.post('brand', brand);
    return data;
  },
  getBrands: async () => {
    const { data } = await authHost.get('brand');
    return data;
  },
  createDevice: async (device) => {
    const { data } = await authHost.post('device', device);
    return data;
  },
  getDevices: async () => {
    const { data } = await host.get('device');
    return data;
  },
  getOneDevice: async (id) => {
    const { data } = await host.get(`device/${id}`);
    return data;
  },
};
