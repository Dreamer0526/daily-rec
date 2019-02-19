# Tables Design

- USER：user_name(pk), password, email(unique), user_id
- TABLE: created_by(fk, user:user_id), table_name, table_id
- FIELD: belongs_to(fk, table:table_id), field_name, data_type, field_id
- RECORD: record_of(fk, field:field_id), created_at, value(SQL ANYDATA)
