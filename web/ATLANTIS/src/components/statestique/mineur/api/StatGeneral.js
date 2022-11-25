import {instancemineur} from '../../../../api/ApiGeneral';




export const fetchDataStatGeneral=(key)=>{    
    return instancemineur({
        method:'GET',
        url:`http://192.168.100.39:8085/mineur/api/statistcs/getStatistcs/${key}`
    })
}

