import React from 'react';
import {instance,tocken} from '../ApiGeneral';


export const eventhDataTetat=(keycloak)=>{    
    console.log(keycloak.token);
    return instance({
        method:'POST',
        url:'/PENALE-SERVICE/api/event/dispatchEvent',
        
    })
}

export const fetchDataTetat=(keycloak)=>{    
    console.log(keycloak.token);
    return instance({
        method:'GET',
        url:'/PENALE-SERVICE/api/stat/tetat',
        headers:{
            Authorization: "Bearer " + keycloak.token
        }
    })
}

export const fetchDataPrison=(keycloak)=>{    
    return instance({
        method:'GET',
        url:'/PENALE-SERVICE/api/stat/prison',
        headers:{
            'Authorization':'Bearer '+keycloak.token
        }
    })
}

export const fetchDataNatureAffaire=(keycloak)=>{    
    return instance({
        method:'GET',
        url:'/PENALE-SERVICE/api/stat/affaire',
        headers:{
            'Authorization':'Bearer '+keycloak.token
        }
    })
}

export const fetchDataAgeInf=(keycloak,age)=>{    
    return instance({
        method:'GET',
        url:`/PENALE-SERVICE/api/stat/age/ageinf/${age}`,
        headers:{
            'Authorization':'Bearer '+keycloak.token
        }
    })
}

export const fetchDataAgeSup=(keycloak,age)=>{    
    return instance({
        method:'GET',
        url:`/PENALE-SERVICE/api/stat/age/agesup/${age}`,
        headers:{
            'Authorization':'Bearer '+keycloak.token
        }
    })
}


export const fetchDataAgeBetween=(keycloak,age1,age2)=>{    

    return instance({
        method:'GET',
        url:`/PENALE-SERVICE/api/stat/age/agebetween/${age1}/${age2}`,
        headers:{
            'Authorization':'Bearer '+keycloak.token
        }
    })
}