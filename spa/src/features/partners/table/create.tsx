import {
  Button,
  Card,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ConfirmationDialog } from "../../../components/ConfirmationDialog";
import {
  listServices,
  selectServices,
  Service,
} from "../../services/serviceSlice";
import { selectUser } from "../../users/usersSlice";
import { createPartner } from "../partnersSlice";

interface CreatePartnerProps {
  open: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreatePartner = ({ open, onClose }: CreatePartnerProps) => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const serviceList = useAppSelector(selectServices);

  useEffect(() => {
    dispatch(listServices());
  }, []);

  const [confirmationDialog, setConfirmationDialog] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  const [services, setServices] = useState<Array<number>>([]);

  const handleToggle = (service: Service) => () => {
    const currentIndex = services.indexOf(service.id);
    const newChecked = [...services];

    if (currentIndex === -1) {
      newChecked.push(service.id);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setServices(newChecked);
  };

  const resetVariables = () => {
    setName("");
    setEmail("");
    setPass("");
    setServices([]);
  };

  const handleClose = () => {
    resetVariables();
    setConfirmationDialog(false);
    onClose(true);
    navigate(`${location.pathname}`);
  };

  const create = () => {
    const data = {
      saloonId: user.saloonId,
      name,
      email,
      password,
      services,
    };

    try {
      dispatch(createPartner(data));
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
        <DialogTitle textAlign="center">Adicionar Parceiro</DialogTitle>
        <DialogContent>
          <Grid container spacing={2} maxHeight="50vh">
            <Grid item xs={4}>
              <TextField
                label="Nome do Parceiro"
                variant="outlined"
                required
                fullWidth
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setName(event.target.value as any);
                }}
                style={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Email do Parceiro"
                variant="outlined"
                required
                fullWidth
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setEmail(event.target.value as any);
                }}
                style={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Senha do Parceiro"
                variant="outlined"
                required
                fullWidth
                value={password}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setPass(event.target.value as any);
                }}
                style={{ marginTop: "20px" }}
              />
            </Grid>
            <Grid container item justifyContent="center" alignContent="center">
              <Grid item xs={8}>
                <Card>
                  <List>
                    {serviceList.map((service) => {
                      return (
                        <ListItem key={service.id} disablePadding>
                          <ListItemButton
                            role={undefined}
                            onClick={handleToggle(service)}
                            dense
                          >
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked={services.includes(service.id)}
                                tabIndex={-1}
                                disableRipple
                              />
                            </ListItemIcon>
                            <ListItemText
                              primary={`${service.category.name} - ${service.name} - R$${service.price} - Apróx. ${service.time} min`}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                </Card>
              </Grid>
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
