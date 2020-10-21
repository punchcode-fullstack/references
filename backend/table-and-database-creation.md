## create a database (in terminal shell)

```bash
createdb name_of_database
```

## create a role (createuser is an alias for CREATE ROLE)

```bash
createuser username
```

- IE - run the following for a generic user we can use

```bash
createuser postgres
```

## data types - what type of data is your column

- VARCHAR()
- TEXT
- etc...

Here's some examples...

https://www.postgresqltutorial.com/postgresql-data-types/

## Creating a table

```sql

CREATE TABLE table_name (
    column datatype constraint
)
```

### For example

```sql
CREATE TABLE accounts (
	user_id serial PRIMARY KEY,
	username VARCHAR ( 50 ) UNIQUE NOT NULL,
	password VARCHAR ( 50 ) NOT NULL,
	email VARCHAR ( 255 ) UNIQUE NOT NULL,
	created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);
```

A resource for this.

https://www.postgresqltutorial.com/postgresql-create-table/

## Dropping a table

```sql
DROP TABLE table_name
```
