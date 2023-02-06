import { useMemo } from "react";
import { useAuth } from "../context/auth-context";

export default function useRows() {
  const { dataApi } = useAuth();

  console.log(dataApi);

  const dataArray = dataApi?.reduce((acc, curr) => {
    let data = {
      nombre: curr.name.first,
      apellido: curr.name.last,
      edad: curr.dob.age,
      genero: curr.gender.charAt(0),
      email: curr.email,
      nacionalidad: curr.nat,
      foto: curr.picture.large,
    }
    console.log(data)
    acc.push(data)
    return acc
  }, []);

  const rows = useMemo(
    () => [...dataArray],
    [dataArray]
  );

  return rows;
}
