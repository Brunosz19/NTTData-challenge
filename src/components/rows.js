import { useMemo } from "react";
import { useAuth } from "../context/auth-context";

export default function useRows() {
  const { dataApi } = useAuth();
  const dataArray = dataApi?.reduce((acc, curr) => {
    let data = {
      nombre: curr.name.first,
      apellido: curr.name.last,
      edad: curr.dob.age,
      genero: curr.gender.toUpperCase().charAt(0),
      email: curr.email,
      nacionalidad: curr.nat,
      foto: curr.picture.thumbnail,
    };
    
    acc.push(data);
    return acc;
  }, []).sort((a, b) => a.edad - b.edad);

  const rows = useMemo(() => [...dataArray], [dataArray]);

  return rows;
}
