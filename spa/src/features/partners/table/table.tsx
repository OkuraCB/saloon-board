import { Button, Grid } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../users/usersSlice";
import { listPartners, selectPartners } from "../partnersSlice";
import { CreatePartner } from "./create";

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

  const [create, setCreate] = useState<boolean>(false);

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
          <Button variant="contained" onClick={() => setCreate(true)}>
            Adicionar parceiro
          </Button>
        </Grid>
      </Grid>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />
      <CreatePartner open={create} onClose={() => setCreate(false)} />
    </>
  );
};
