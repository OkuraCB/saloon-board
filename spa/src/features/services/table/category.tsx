import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { ConfirmationDialog } from "../../../components/ConfirmationDialog";
import { createCategory, listCategories, NewCategory } from "../serviceSlice";

interface CreateCategoryProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreateCategory = ({ open, onClose }: CreateCategoryProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [confirmationDialog, setConfirmationDialog] = useState<boolean>(false);

  const [name, setName] = useState<string>("");

  const resetVariables = () => {
    setName("");
  };

  const handleClose = () => {
    resetVariables();
    setConfirmationDialog(false);
    onClose(true);
    navigate(`${location.pathname}`);
  };

  const create = () => {
    const data: NewCategory = {
      name,
    };

    try {
      dispatch(createCategory(data));
      dispatch(listCategories());
      handleClose();
    } catch (e) {
      handleClose();
    }
  };

  return (
    <>
      <Dialog open={open} PaperProps={{ sx: { width: "50%", maxWidth: "md" } }}>
        <DialogTitle textAlign="center">Adicionar Categoria</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} maxHeight="50vh" justifyContent="center">
            <Grid item xs={6}>
              <TextField
                label="Nome da Categoria"
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
    </>
  );
};
