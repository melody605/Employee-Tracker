INSERT INTO employee (employee_name) VALUES -- id is auto set (serial)
  ('Mike Myers'),
  ('Freddy Kruger'),
  ('Jason Vorhes '),
  ('Art Clown'),
  ('Alfred Hitchcock');

INSERT INTO departments (employee_id, department) VALUES
  (2, 'Logistics'),
  (3, 'HR'),
  (3, 'IT'),
  (1, 'Sales '),
  (4, 'Marketing'),
  (5, 'Engineering'),
  (5, 'Maintenace');

  INSERT INTO role (title, department_id, salary) VALUES