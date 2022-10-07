import { gql } from '@apollo/client'

export const GET_WEATHER_QUERY = gql`    
    query findJobSmsByIds ($idJob: String) {
        findJobSmsByIds(idJob: $idJob){
          name,idJob,jobStatus,detailJobList {
            idDetail
            phoneNumber
            froms
            message
            detailStatus
          }
        }
      }
    
  `;

export const GET_JOBS_QUERY = gql`    
  query {
    jobsmsList{
       name,idJob,jobStatus,detailJobList {
              idDetail
              phoneNumber
              froms
              message
              detailStatus
            }
    }
  }
    
  `;