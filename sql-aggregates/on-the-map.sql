select count("cities") as "city count",
       "country"."name"
from "cities"
join "countries" as "country" using ("countryId")
group by "countryId"
order by "city count" desc;
