# Tables Design


```yaml
- USER
  attributes:
    user_name: 
      type: VARCHAR(20)
    password:
      type: VARCHAR(200)
    email:
      type: VARCHAR(100)
    user_id:
      type: INT
  constraints:
    user_name: Primary Key
    email: UNIQUE

- TABLE
  attributes:
    created_by:
      type: INT
    table_name:
      type: VARCHAR(20)
    is_enabled:
      type: BOOLEAN
    table_id:
      type: INT
  constraints:
    created_by: FOREIGN KEY USER:user_id

- FIELD:
  attributes:
    belongs_to:
      type: INT
    field_name:
      type: VARCHAR(20)
    data_type:
      type: ENUM('SMALLINT', 'MULTISET', 'VARCHAR', 'TEXT')
    field_id: 
      type: INT
  constraints:
    belongs_to: FOREIGN KEY TABLE:table_id

- RECORD:
  attributes:
    record_of:
      type: INT
    created_at:
      type: TIMESTAMP
    value:
      type: ANYDATA
  constraints:
    record_of: FOREIGN KEY FIELD:field_id   
```
