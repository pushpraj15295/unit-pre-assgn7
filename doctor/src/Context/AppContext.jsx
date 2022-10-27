import { createContext, useState } from "react";

export const AppContext = createContext();


  const initialHos = {

    Hospital: "",
    Address: "",
  };

export function AppContextProvider({children}) {
   
    const [doctorData,setDoctorData] = useState([])

    const [hospData,setHospData] = useState([])

   return(
    
     <AppContext.Provider value={{doctorData,hospData,setDoctorData,setHospData}}>{children}</AppContext.Provider>

   )

}

