package com.cgpr.penaleservice.entities;

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
                name = "Terrorisme.Prison",
                query =
                        "select count(*) counts,getLibellePrison(tcodgou,tcodpr) prison ,tetat,tcodgou,tcodpr  from tjugearret where tcodtaf in('01') and tcodsex=? and tetat=?  group by getLibellePrison(tcodgou,tcodpr),tetat,tcodgou,tcodpr", resultClass = StatTerrorismePrison.class
        ),@NamedNativeQuery(
        name = "Etranger.Prison",
        query =
                "select count(*) counts,getLibellePrison(tcodgou,tcodpr) prison ,tetat,tcodgou,tcodpr  from tjugearret where tcodnat not in('001') and tcodsex=? and tetat=?  group by getLibellePrison(tcodgou,tcodpr),tetat,tcodgou,tcodpr", resultClass = StatTerrorismePrison.class
)
        ,@NamedNativeQuery(
        name = "Affricain.Prison",
        query =
                "select count(*) counts,getLibellePrison(tcodgou,tcodpr) prison ,tetat,tcodgou,tcodpr  from tjugearret where tcodnat in(select code_nationalite from nationalite where cn='AF') and tcodsex=? and tetat=?  group by getLibellePrison(tcodgou,tcodpr),tetat,tcodgou,tcodpr", resultClass = StatTerrorismePrison.class
)
})
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class StatTerrorismePrison {
    @Id
    private String prison;
    private Long counts;
    private String tetat;
    private String tcodgou;
    private String tcodpr;
}
