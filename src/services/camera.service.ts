import axios, {AxiosResponse} from 'axios';

export const processImage = (body: any): Promise<AxiosResponse<string>> => {
  return axios.post(
    'https://baaf-2402-800-629c-6110-2585-e643-94e9-22c7.ngrok-free.app/process',
    body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
