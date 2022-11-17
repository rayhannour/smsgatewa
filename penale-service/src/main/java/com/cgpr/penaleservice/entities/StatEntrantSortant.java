package com.cgpr.penaleservice.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "Entrant.findAll",
                query =
                        "select count(*) counts,EXTRACT(Year FROM tdatdet) years from tdetention where EXTRACT(Year FROM tdatdet) between ? and ? group by EXTRACT(Year FROM tdatdet) order by EXTRACT(Year FROM tdatdet)", resultClass = StatEntrantSortant.class
        ),
        @NamedNativeQuery(
                name = "Sortant.findAll",
                query =
                        "select count(*) counts,EXTRACT(Year FROM tdatlibe) years from tdetention where EXTRACT(Year FROM tdatlibe) between ? and ? group by EXTRACT(Year FROM tdatlibe) order by EXTRACT(Year FROM tdatlibe)", resultClass = StatEntrantSortant.class)

})

@NoArgsConstructor @AllArgsConstructor
@Data



public class StatEntrantSortant {
    @Id
    @Column(name = "years", nullable = false)
    private Long years;
    private Long counts;


}
