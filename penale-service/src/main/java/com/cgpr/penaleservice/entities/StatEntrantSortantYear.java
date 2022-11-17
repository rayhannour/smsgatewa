package com.cgpr.penaleservice.entities;

        import lombok.AllArgsConstructor;
        import lombok.Data;
        import lombok.NoArgsConstructor;

        import javax.persistence.*;

@Entity
@NamedNativeQueries({
        @NamedNativeQuery(
                name = "Entrant.findAllMounths",
                query =
                        "select count(*) counts,to_char(tdatdet,'MONTH') mounths,EXTRACT(month FROM tdatdet) mounthsname from tdetention where EXTRACT(year FROM tdatdet) =? group by EXTRACT(month FROM tdatdet),to_char(tdatdet,'MONTH') order by EXTRACT(month FROM tdatdet)", resultClass = StatEntrantSortantYear.class
        ),
        @NamedNativeQuery(
                name = "Sortant.findAllMounths",
                query =
                        "select count(*) counts,to_char(tdatlibe,'MONTH') mounths,EXTRACT(month FROM tdatlibe) mounthsname from tdetention where EXTRACT(year FROM tdatlibe) =? group by EXTRACT(month FROM tdatlibe),to_char(tdatlibe,'MONTH') order by EXTRACT(month FROM tdatlibe)", resultClass = StatEntrantSortantYear.class)

})

@NoArgsConstructor
@AllArgsConstructor
@Data



public class StatEntrantSortantYear {
    @Id
    @Column(name = "mounths", nullable = false)
    private String mounths;
    private Long counts;
    private Long mounthsname;

}
