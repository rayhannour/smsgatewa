

export default  async function AuthorizedFunction(keycloak,menu,menuGlobal) {

   


    if(menuGlobal.length===0){
    menu.map((a) => {     
        
        if (keycloak && a.authorize) {
             a.authorize.some(r => {
                const realm =  keycloak.hasRealmRole(r);
                const resource = keycloak.hasResourceRole(r);
                

                if(realm || resource){
                    menuGlobal.push(a);
                }               
            });
        }


        
        
      });
    }




    return menuGlobal;
}