import { Button, Grid } from "@mui/material";
import { Pace, WindupChildren } from "windups";
import { useAppSelector } from "../../app/hooks";
import { ScheduledTable } from "../scheduled/table/table";
import { selectUser } from "../users/usersSlice";

export const Home = () => {
  const user = useAppSelector(selectUser);

  return (
    <Grid container spacing={2} flexDirection="row" height="80vh">
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        xs={6}
      >
        <Grid item>
          <WindupChildren>
            <Pace getPace={() => 60}>
              <span style={{ fontSize: 60 }}>Olá, {user.name}!</span>
            </Pace>
          </WindupChildren>
        </Grid>
        <Grid item>
          <span>
            Utilizando esse aplicativo, você pode administrar todos os
            agendamentos, parceiros do seu salão, serviços oferecidos, e muito
            mais!
          </span>
          <br />
          <br />
          <span>
            Ao lado você possui uma forma rápida de conferir os agendamentos que
            estão pendentes
          </span>
        </Grid>

        <Grid
          container
          item
          spacing={2}
          marginTop={2}
          flexDirection="row"
          justifyContent="center"
        >
          <Grid item>
            <Button variant="contained">teste</Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary">
              teste
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        item
        flexDirection="column"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        xs={6}
      >
        <ScheduledTable />
      </Grid>
    </Grid>
  );
};
