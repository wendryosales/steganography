// React
import { useCallback, useState } from "react";

// Third
import { useDropzone } from 'react-dropzone';

// Redux
import { uploadFail, uploadSucess } from '../../redux/actions';
import { useAppDispatch } from "../../redux/hooks";

// Mui
import SendIcon from '@mui/icons-material/Send';
import Fab from "@mui/material/Fab";

// Local and Project
import api from '../../services/api';
import BoxLoading from '../boxloading';
import { FileInfo } from "../FileInfo";
import { renderDragMessage } from "./renderDragMessage";
import { Container } from "./styles/Container";
import { DropContainer } from "./styles/DropContainer";

const initalLoadingBox = {
  isLoading: false,
  progress: 0,
  done: false,
};

const Dropzone = () => {

  const [ fileInfo, setFileInfo ] = useState<File | null>(null);
  const [ loadingBox, setLoadingBox ] = useState(initalLoadingBox);
  const [ preview, setPreview ] = useState<string>('');

  const dispatch = useAppDispatch();

  const onDrop = useCallback((files: File[]) => {
    const preview = URL.createObjectURL(files[0]);
    setFileInfo(files[0]);
    setPreview(preview);
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone(
    {
      onDrop,
      multiple: false,
      accept: {
        'image/bmp': ['.bmp'],
      } 
  })

  const onDelete = useCallback(() => {
    setFileInfo(null);
  }, [])

  const onSubmitted = () => {
    const data = new FormData();
    data.append('image', fileInfo as Blob);

    setFileInfo(null);
    const loading = { isLoading: true, progress: 0, done: false };
    setLoadingBox(loading)
    api.post("/image/", data, {
      onUploadProgress: (e) => {
        const progress = Math.round((e.loaded * 100) / (e.total || 0));
        const loading = { isLoading: true, progress, done: false };
        setLoadingBox(loading)
      }
    }).then((response) => {
      setLoadingBox((prev) => ({ 
        ...prev, done: true, 
        link: response.data.url
      }))
      dispatch(uploadSucess())
    }
    ).catch((error) => {
      console.log(error);
      dispatch(uploadFail())
    }
    )
  }

  return (
    <>
      <Container>
        <BoxLoading {...loadingBox} /> 
        {
          !!fileInfo ? (
            <FileInfo
              file={fileInfo}
              preview={preview}
              onDelete={onDelete}/>
            
          ) : (
            <DropContainer
              {...getRootProps()} 
              isDragActive={isDragActive} 
              isDragReject={isDragReject}>
              <input {...getInputProps()} />
              {
                renderDragMessage(isDragActive, isDragReject)
              }
            </DropContainer>
          )
        }
      </Container>
      {
        !!fileInfo && (
          <Fab  variant="extended" sx={{ mt: 1 }} onClick={onSubmitted}>
            <p> Enviar arquivo </p>
            <SendIcon color="success" sx={{ ml: 1 }} />
          </Fab>
        )
      }
    </>
  )
}

export default Dropzone