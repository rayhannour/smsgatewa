package com.cgpr.posteservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedNativeQueries;
import javax.persistence.NamedNativeQuery;

@Entity
@NamedNativeQueries({

        @NamedNativeQuery(
                name = "MontantYearMounth.findAll",
                query =
                        "select sum(montant) counts,to_char(DATEHEURERECEPTIONFROMPOSTE,'MONTH') mounthsname,EXTRACT(month FROM DATEHEURERECEPTIONFROMPOSTE) mounths  from OPERATIONVP where   EXTRACT(year FROM DATEHEURERECEPTIONFROMPOSTE)=? group by to_char(DATEHEURERECEPTIONFROMPOSTE,'MONTH') ,EXTRACT(month FROM DATEHEURERECEPTIONFROMPOSTE)  order by EXTRACT(month FROM DATEHEURERECEPTIONFROMPOSTE)", resultClass = OperationYearMounth.class)

})

@AllArgsConstructor @NoArgsConstructor @Builder
@Data
public class OperationYearMounth {
    @Id
    private Long mounths;
    private Long counts;
    private String mounthsname ;
}
