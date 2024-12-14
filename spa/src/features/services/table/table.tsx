import { Button, Grid } from "@mui/material";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { listServices, selectServices } from "../serviceSlice";
import { CreateServices } from "./create";

export const ServicesTable = () => {
  const columns = useMemo(
    () => [
      { header: "Serviço", accessorKey: "name" },
      { header: "Tempo estimado (minutos)", accessorKey: "time" },
      { header: "Preço R$", accessorKey: "price" },
    ],
    []
  );

  const [create, setCreate] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const data = useAppSelector(selectServices);

  useEffect(() => {
    dispatch(listServices());
  }, []);

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnOrdering: true,
    enableGlobalFilter: false,
    renderTopToolbarCustomActions: () => (
      <Grid container spacing={2}>
        <Grid item>
          <Button variant="contained" onClick={() => setCreate(true)}>
            Adicionar Serviço
          </Button>
        </Grid>
      </Grid>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />
      <CreateServices open={create} onClose={() => setCreate(false)} />
    </>
  );
};
