import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { handleNumberOnly } from "../../../common/handleNumbers";
import { ConfirmationDialog } from "../../../components/ConfirmationDialog";
import {
  createService,
  listCategories,
  listServices,
  NewService,
  selectCategories,
} from "../serviceSlice";
import { CreateCategory } from "./category";

interface CreateServicesProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateServices = ({ open, onClose }: CreateServicesProps) => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    dispatch(listCategories());
  }, []);

  const [confirmationDialog, setConfirmationDialog] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [time, setTime] = useState<string>("0");
  const [price, setPrice] = useState<string>("0.0");
  const [category, setCategory] = useState<string>("");

  const [createCategory, setCreateCategory] = useState<boolean>(false);

  const resetVariables = () => {
    setName("");
    setTime("0");
    setPrice("0.0");
    setCategory("");
  };

  const handleClose = () => {
    resetVariables();
    setConfirmationDialog(false);
    onClose(true);
    navigate(`${location.pathname}`);
  };

  const create = () => {
    const data: NewService = {
      name,
      time: parseInt(time),
      price: parseFloat(price),
      category,
    };

    try {
      dispatch(createService(data));
      dispatch(listServices());
      handleClose();
    } catch (e) {
      handleClose();
    }
  };

  return (
    <>
      <Dialog
        open={open}
        PaperProps={{ sx: { width: "100%", maxWidth: "md" } }}
      >
        <DialogTitle textAlign="center">Adicionar Serviço</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} maxHeight="50vh">
            <Grid item xs={3}>
              <Autocomplete
                value={category}
                onChange={(event, newValue) => {
                  setCategory(newValue ?? "");
                }}
                options={categories}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Categoria"
                    slotProps={{
                      input: {
                        ...params.InputProps,
                        startAdornment: (
                          <IconButton onClick={() => setCreateCategory(true)}>
                            <Add />
                          </IconButton>
                        ),
                        endAdornment: params.InputProps?.endAdornment,
                      },
                    }}
                  />
                )}
                style={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Nome do Serviço"
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value);
                }}
                style={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Tempo estimado em minutos"
                variant="outlined"
                type="number"
                required
                fullWidth
                value={time}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleNumberOnly(event, setTime);
                }}
                style={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                label="Preço"
                variant="outlined"
                type="number"
                required
                fullWidth
                value={price}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  handleNumberOnly(event, setPrice);
                }}
                style={{ marginTop: "20px" }}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">R$</InputAdornment>
                    ),
                  },
                }}
              />
            </Grid>
            <Grid container item justifyContent="center" alignContent="center">
              <Grid item xs={8}></Grid>
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: "1.25rem" }}>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => setConfirmationDialog(true)}>Criar</Button>
        </DialogActions>
      </Dialog>

      <ConfirmationDialog
        open={confirmationDialog}
        executeFunction={create}
        onClose={() => {
          setConfirmationDialog(false);
        }}
      />

      <CreateCategory
        open={createCategory}
        onClose={() => setCreateCategory(false)}
      />
    </>
  );
};
