import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectUser } from "../../users/usersSlice";
import { listPendingScheduled, selectPending } from "../schedulesSlice";

export const ScheduledTable = () => {
  const columns = useMemo(
    () => [
      { header: "Nome", accessorKey: "authorName" },
      { header: "Numero", accessorKey: "authorNumber" },
    ],
    []
  );

  const dispatch = useAppDispatch();
  const data = useAppSelector(selectPending);
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(listPendingScheduled(user.saloonId));
  }, []);

  const table = useMaterialReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
  });

  return <MaterialReactTable table={table} />;
};
