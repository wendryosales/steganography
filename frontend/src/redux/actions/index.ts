import { ACTION_TESTE } from './types';

export const actionTeste = () => {
  return {
    type: ACTION_TESTE,
    payload: {
      teste: 'teste',
    },
  };
}