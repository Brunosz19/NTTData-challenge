import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthProvider(props) {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=15")
      .then((response) => setDataApi(response.data.results))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(dataApi)
  }, [dataApi]);

  const value = {
    dataApi,
    setDataApi
  };

  return <AuthContext.Provider value={value} {...props} />;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
