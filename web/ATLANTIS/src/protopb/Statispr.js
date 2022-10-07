import React from 'react';
import {Statispr,GetStatGlobalRequest,GetStatListResponse,GetStatJourRequest,GetStatJourResponse} from '../protopb/statisprison_pb';
import {StatisprisonServiceClient} from '../protopb/statisprison_grpc_web_pb';


export const Statispr = () => {
    
    const grpcCall = () => {

        var request = new proto.GetStatGlobalRequest();
    

        var echoService = new proto.StatisprisonServiceClient(
            'http://localhost:8787');
        
            echoService.echo(request, metadata, function(err, response) {
                if (err) {
                  console.log(err.code);
                  console.log(err.message);
                } else {
                  console.log(response.getMessage());
                }
              });

            }
        


    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h5>Empty Page</h5>
                    <p>This is your empty page template to start building beautiful applications.</p>
                </div>
            </div>
        </div>
    );

    }
