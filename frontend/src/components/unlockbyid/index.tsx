import { Backdrop, CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { AnyAction } from "redux";
import { decodeImage } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { ImageItem } from "../dialogselect/style";
import SeeMessage from "./seeMessage";

import { Container, ImagesContainer } from "./style";

export const UnlockByID = () => {
  const [id, setId] = useState("");
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();
  const { payload, loading, status } = useAppSelector((state: RootState) => state.decode);
  const { image_hidden, image_original, message } = payload;
  const decode = () => {
    if (id.length === 0) {
      setError(true);
      return;
    }
    setError(false);
    dispatch(decodeImage(id) as unknown as AnyAction);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <Container>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {
        status === "success" ? (
          <>
          <ImagesContainer>
            <div>
              <strong>imagem criptografada</strong>
              <ImageItem>
                <img src={image_hidden} alt="hidden" />
              </ImageItem>
            </div>
            <div>
              <strong>imagem original</strong>
              <ImageItem>
                <img src={image_original} alt="original" />
              </ImageItem>
            </div>
          </ImagesContainer>
          <SeeMessage message={message} />
          </>
        ) : (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                id="outlined-basic"
                label="ID"
                variant="outlined"
                value={id}
                onChange={handleChange}
                error={error}
                helperText={error ? "É necessário um ID" : ""}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                fullWidth
                onClick={decode}
              >
                Descriptografar
              </Button>
            </Grid>
          </Grid>
        )
      }
    </Container>
  );
};