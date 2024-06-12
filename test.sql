-- Will show the names of those who send a report to whom
-- Table_name: users

--Columns: user_id, name, reporter_id

SELECT u1.name AS reporter_name, u2.name AS receiver_name
  FROM users u1
  JOIN users u2 ON u2.user_id = u1.reporter_id;
