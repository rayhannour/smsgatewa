package com.cgpr.penaleservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity

@NamedNativeQueries({
        @NamedNativeQuery(
                name = "User.findAll",
                query =
                        "select mat_pers matpers,nom_pers nompers,pre_pers prepers,typeuser from utilisateur where MACADR is not null and MACADR is not null and typeuser in('MI','TR') order by typeuser", resultClass = Utilisateurpenale.class
        ),
        @NamedNativeQuery(
                name = "User.findMaxDate",
                query =
                        "select max(tdat_consult) maxdateconsult  from TEMPUSER.TFICHETRACE where MAT_PERS=? "),
        @NamedNativeQuery(
                name = "User.findCountByUser",
                query =
                        "select count(*) counts from TEMPUSER.TFICHETRACE where MAT_PERS=? ")

})

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class Utilisateurpenale {
    @Id
    private String matpers;
    private String nompers;
    private String prepers;
    private String typeuser;
    @Transient
    private Date maxdateconsult;
    @Transient
    private Long counts;
}
