package com.cgpr.posteservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "Transaction.findAll",
                query =
                        "select count(*) counts, sum(montant) montant,alias from OPERATIONVP group by alias", resultClass = Operation.class
        )/*,
        @NamedNativeQuery(
                name = "Transaction.findAll",
                query =
                        "select count(*) counts, sum(montant) montant,alias from OPERATIONVP where EXTRACT(year FROM DATEHEURERECEPTIONFROMPOSTE)=?  group by alias", resultClass = Operation.class
        ),
        @NamedNativeQuery(
                name = "Montant.findAll",
                query =
                        "select sum(montant) counts,alias from OPERATIONVP group by alias", resultClass = Operation.class)

        ,
        @NamedNativeQuery(
                name = "MontantYearMounth.findAll",
                query =
                        "select sum(montant) counts,alias,to_char(DATEHEURERECEPTIONFROMPOSTE,'MONTH') mounths,EXTRACT(month FROM DATEHEURERECEPTIONFROMPOSTE) mounthsname from OPERATIONVP where alias=? and   EXTRACT(year FROM DATEHEURERECEPTIONFROMPOSTE)=? group by alias,to_char(DATEHEURERECEPTIONFROMPOSTE,'MONTH') ,EXTRACT(month FROM DATEHEURERECEPTIONFROMPOSTE)  order by EXTRACT(month FROM DATEHEURERECEPTIONFROMPOSTE)", resultClass = Operation.class)
*/
})

@AllArgsConstructor @NoArgsConstructor @Builder
@Data
public class Operation {
    @Id
    private String alias;
    private Long counts;
    private Long montant;
    @Transient
    private String prison;


}
