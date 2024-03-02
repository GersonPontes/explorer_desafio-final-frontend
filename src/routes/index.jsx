import { BrowserRouter } from "react-router-dom";
//import { useEffect } from 'react';
import { useAuth } from "../hooks/auth";
//import { api } from '../services/api';

import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { CustomerRoutes } from "./customer.routes";

import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();
  //const { user, signOut } = useAuth();

  function AccessRoute() {
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes />
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />
      default:
        return <CustomerRoutes />
    }
  };

  /*
  useEffect(() => {
    function validateUser(){
      let data = localStorage.getItem("@foodexplorer:user");

      if(data){
        data = { user: JSON.parse(data)};
        
        api
        .get(`/users/validated/${data.user.id}`)
        .catch((error) => {
          if(error.response?.status === 401) {
            signOut()
          }      
        })  
      }
    }

    validateUser();
  }, []);
  */

  return (
    <BrowserRouter>
      { user ?  < AccessRoute /> : < AuthRoutes /> }
    </BrowserRouter>
  );
};