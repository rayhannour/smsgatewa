import {instance} from '../../../../api/ApiGeneral';




export const fetchDataStatGeneral=(keycloak)=>{    
    return instance({
        method:'GET',
        url:'/POSTE-SERVICE/api/stat/poste/operationsmontants',
        headers:{
            Authorization: "Bearer " + keycloak.token
        }
    })
}

export const fetchDataStatGeneralYearsMounth=(keycloak,year)=>{    
    return instance({
        method:'GET',
        url:`/POSTE-SERVICE/api/stat/poste/years/${year}`,
        headers:{
            Authorization: "Bearer " + keycloak.token
        }
    })
}