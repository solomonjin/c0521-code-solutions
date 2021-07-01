with "cte_gross" as (
  select "filmId",
         sum("payments"."amount") as "grossRevenue"
    from "films"
    join "inventory" using ("filmId")
    join "rentals" using ("inventoryId")
    join "payments" using ("rentalId")
    group by "filmId"
),
"cte_cost" as (
  select "filmId",
         count("inventory"."inventoryId") * "replacementCost" as "totalCost"
    from "films"
    join "inventory" using ("filmId")
    group by "filmId"
    order by "filmId"
)
select "title",
       "description"
from "films"
join "cte_gross" using ("filmId")
join "cte_cost" using ("filmId")
order by "cte_gross"."grossRevenue" - "cte_cost"."totalCost" desc
limit 5;
