import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Nombre",
        accessor: "nombre",
      },
      {
        Header: "Apellido",
        accessor: "apellido",
      },
      {
        Header: "Edad",
        accessor: "edad",
      },
      {
        Header: "Genero",
        accessor: "genero",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Nacionalidad",
        accessor: "nacionalidad",
      },
      {
        Header: "Foto",
        accessor: "foto",
      },
    ],
    []
  );

  return columns;
}
