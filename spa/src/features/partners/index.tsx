import { Grid } from "@mui/material";
import { Pace, WindupChildren } from "windups";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../users/usersSlice";
import { PartnersTable } from "./table/table";

export const Partners = () => {
  const user = useAppSelector(selectUser);

  return (
    <Grid container spacing={2} flexDirection="row" height="80vh">
      <Grid container item flexDirection="column" spacing={2} xs={12}>
        <Grid item>
          <WindupChildren>
            <Pace getPace={() => 60}>
              <span style={{ fontSize: 60 }}>Parceiros</span>
            </Pace>
          </WindupChildren>
        </Grid>
        <Grid item>
          <span>
            Nessa página você pode registrar os parceiros de seu salão e quais
            serviços eles prestam.
          </span>
        </Grid>
      </Grid>
      <Grid
        container
        item
        flexDirection="column"
        alignContent="center"
        alignItems="center"
        xs={12}
      >
        <PartnersTable />
      </Grid>
    </Grid>
  );
};
