import { Grid } from "@mui/material";
import { Pace, WindupChildren } from "windups";
import { ServicesTable } from "./table/table";

export const Services = () => {
  return (
    <Grid container spacing={2} flexDirection="row" height="80vh">
      <Grid container item flexDirection="column" spacing={2} xs={12}>
        <Grid item>
          <WindupChildren>
            <Pace getPace={() => 60}>
              <span style={{ fontSize: 60 }}>Serviços</span>
            </Pace>
          </WindupChildren>
        </Grid>
        <Grid item>
          <span>
            Nessa página você pode registrar os serviços oferecidos pelo seu
            salão, assim como os funcionários que oferecem esses serviços.
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
        <ServicesTable />
      </Grid>
    </Grid>
  );
};
