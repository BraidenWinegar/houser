Insert Into users(property_name, address, city, state, zip) 
values (
    $1, $2, $3, $4, $5
);

select * from users;