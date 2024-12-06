import { Button, Grid } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../users/usersSlice";
import { listPartners, selectPartners } from "../partnersSlice";

export const PartnersTable = () => {
  const columns = useMemo(
    () => [
      { header: "Nome", accessorKey: "partnerName" },
      {
        header: "Serviço",
        accessorKey: "serviceName",
      },
      { header: "Preço", accessorKey: "price" },
      { header: "Tempo estimado (minutos)", accessorKey: "time" },
    ],
    []
  );

  const dispatch = useAppDispatch();
  const data = useAppSelector(selectPartners);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(listPartners(user.saloonId));
  }, []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true,
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    initialState: {
      density: "compact",
      grouping: ["partnerName"],
    },
    renderTopToolbarCustomActions: () => (
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => console.log("teste")}>
            Adicionar parceiro
          </Button>
        </Grid>
      </Grid>
    ),
  });

  return <MaterialReactTable table={table} />;
};
