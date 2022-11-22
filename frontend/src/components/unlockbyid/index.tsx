import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { AnyAction } from "redux";
import { decodeImage } from "../../redux/actions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { RootState } from "../../redux/store";
import { Container } from "./style";

export const UnlockByID = () => {
  const [id, setId] = useState("");

  const dispatch = useAppDispatch();
  const { message } = useAppSelector((state: RootState) => state.decode.payload);

  const decode = () => {
    dispatch(decodeImage(id) as unknown as AnyAction);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="ID"
            variant="outlined"
            value={id}
            onChange={handleChange}
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
    </Container>
  );
};