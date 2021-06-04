import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/createUser',
    method: 'get',
    response: ({}) => {
      
      return {
        code: 0,
        message: 'ok',
          data: ['1','2']
      };
    },
  },
] as MockMethod[];