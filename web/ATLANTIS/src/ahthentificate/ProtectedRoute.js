import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

function ProtectedRoute({ roles,component: Component, ...restOfProps }) {

  const { keycloak } = useKeycloak();


  const isAutherized = (roles) => {
    if (keycloak && roles) {
        return roles.some(r => {
            const realm =  keycloak.hasRealmRole(r);
            const resource = keycloak.hasResourceRole(r);
            return realm || resource;
        });
    }
    return false;
}

  return (
    <Route 
      {...restOfProps}
      render={(props) =>
        isAutherized(roles) ? <Component {...props} /> : <Redirect to="/documentation" />
      }
    />
  );
}

export default ProtectedRoute;