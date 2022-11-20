import { File } from '../../components/FileInfo/types';
import { ADD_FILE, REMOVE_FILE } from './constants';

export const addfile = (file: File) => {
  return {
    type: ADD_FILE,
    payload: {
      file
    },
  };
}

export const removefile = () => ({ type: REMOVE_FILE});