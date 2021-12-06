START TRANSACTION;
  alter table "presence" add constraint fk_presence foreign key (id_employee) references employee(id);
  alter table "contract" add constraint fk_employee_contract foreign key  (id_employee) references employee(id);
  alter table "contract" add constraint fk_customer_contract foreign key  (id_customer) references customer(id);
COMMIT;