package com.cgpr.penaleservice.entities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "Terrorisme.Sexe",
                query =
                        "select count(*) counts,tcodsex,tetat from tjugearret where tcodtaf in('01') and tetat in('A','J') and tcodsex=? group by tcodsex,tetat", resultClass = StatTerrorisme.class
        )

})

@NoArgsConstructor @AllArgsConstructor @Builder
@Data
public class StatTerrorisme {
@Id
private String tetat;
private Long counts;
private String tcodsex;



}
