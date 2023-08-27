import axios from 'axios';

export const processImage = (body: any) => {
  return axios.post(
    'https://271b-2402-800-629c-6110-f82e-d5d-7e1c-d1bc.ngrok-free.app/process',
    body,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
