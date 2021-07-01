select "firstName",
       "lastName",
       sum("payments"."amount") as "total payment"
from "customers"
join "payments" using ("customerId")
group by "customerId"
order by "total payment" desc;
