---
title: "PHP Yii2 - Database Migration"
date: 2020-07-25 12:00:00
last_update: 2020-07-25 12:00:00
tags: ["Yii", "PHP", "SQL", "Database"]
description: "Yii2 database migration cheat sheet"
---

# Introduction

Database Migration is a very useful feature in Yii2 to maintain and monitor your database structure. It's a _version-controlled_ for your database structure so that we can keep track of our database structure changes.

## Topics

-   [Commands](#commands)
-	[Create Migration](#create-migration)
-	[Create Table](#create-table)
-	[Data Type List](#data-type-list)
-	[Drop Table](#drop-table)
-	[Rename Table](#rename-table)
-	[Add Column](#add-column)
-	[Drop Column](#drop-column)
-	[Alter Column](#alter-column)
-	[Add Primary Key](#add-primary-key)
-	[Drop Primary Key](#drop-primary-key)
-	[Create Index](#create-index)
-	[Drop Index](#drop-index)
-	[Add Foreign Key](#add-foreign-key)
-	[Drop Foreign Key](#drop-foreign-key)
-	[Insert Records](#insert-records)
-	[Raw SQL](#raw-sql)
-	[Change Database](#change-database)

## Commands

To view the complete list of yii migration commands, run the following command:

```bash
$ yii help migrate
```

You will get the following result:

![Migrate Command List](../src/assets/images/post/yii2-migration/command-list-migrate.png)

## Create Migration

As self-explained, to create a migration, run the following command in your terminal / command prompt:

```bash
$ yii migrate/create your_migration_name
```

For example, to create a new `users` table:

```bash
$ yii migrate/create create_users_table
```

It will then asked for confirmation, type `yes` and hit `Enter` then a new migration file will be created. In your Yii project folder, you will found there is new folder `migrations` and a file `m<XXXXXX_XXXXXX>_create_users_table.php` has been created.

> `<XXXXXX_XXXXXX>` refers to the UTC datetime at which the migration being created.

Open the migration file with your editor, you will find the following code:

```php
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `users`.
 */
class m200725_073858_create_users_table extends Migration
{
    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('users', [
            'id' => $this->primaryKey(),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('users');
    }
}
```

You can see there are two functions in the migration file.

-   function `up()` - The `up()` function is the codes to be executed when we run the migration in the command line with the `$ yii migrate` command.

-   function `down()` - The `down()` function is the codes to be executed when we revert the migration with the command `$ yii migrate/down`.

For example if we do create table in `up()` function we may implement drop table in `down()` function, or if we do add column in `up()` function then we may implement drop column in `down()` function

Now try to run this command then followed by `yes`:

```bash
$ yii migrate
```

Once the migration done successfully, go to your database you will find that a new table `users` has been created with a column `id`.

## Cheat Sheet

> All the code below are tested in **Yii version 2.0.11**

### Create table

#### Create table and column

```php
$this->createTable('table_name', [
	'col_1' => $this->primaryKey(),
	'col_2' => $this->string(64),
]);
```

will equal to the below SQL query:

```SQL
CREATE TABLE `table_name` (
	`col_1` INT(11) NOT NULL AUTO_INCREMENT,
	`col_2` VARCHAR(64) DEFAULT NULL,
	PRIMARY KEY (`id`)
)
```

#### With ENGINE and CHARSET

```php
$this->createTable('table_name', [
	'col_1' => $this->primaryKey(),
], 'engine = InnoDb, charset = utf8');
```

#### UNSIGNED, DEFAULT VALUE, NOT NULL

```php
$this->createTable('table_name', [
	'col_2' => $this->bigPrimaryKey(64),
	// `col_2` BIGINT(20) NOT NULL AUTO_INCREMENT
	// PRIMARY KEY (`col_2`)

	'col_3' => $this->integer(4)->defaultValue(10)->unsigned()->notNull(),
	// `col_3` INT(4) UNSIGNED NOT NULL DEFAULT 10
]);
```

#### Raw SQL

```php
$this->createTable('table_name', [
	'col_1' => 'INT(11) UNSIGNED NOT NULL AUTO_INCREMENT',
	'col_2' => 'VARCHAR(10)',
	'PRIMARY KEY (`col_1`)',
	'KEY `col_2` USING HASH (`col_2`)',
])
```

### Data Type List

> This data type is compare to MySQL data type

#### Numeric

| Yii            | MySQL          | Remarks                        |
| :------------- | :------------- | :----------------------------- |
| integer()      | INT            |                                |
| tinyInteger()  | TINYINT        | Available since version 2.0.14 |
| bigInteger()   | BIGINT         |                                |
| smallInteger() | SMALLINT       |                                |
| decimal()      | DECIMAL        |                                |
| float()        | FLOAT          |                                |
| double()       | DOUBLE         |                                |
| money()        | DECIMAL(19, 4) |                                |

### Boolean

| Yii       | MySQL      |
| :-------- | :--------- |
| boolean() | TINYINT(1) |

#### String

| Yii      | MySQL   |
| :------- | :------ |
| char()   | CHAR    |
| string() | VARCHAR |
| text()   | TEXT    |
| binary() | BLOB    |

#### Datetime

| Yii         | MySQL     |
| :---------- | :-------- |
| date()      | DATE      |
| time()      | TIME      |
| datetime()  | DATETIME  |
| timestamp() | TIMESTAMP |

#### JSON

| Yii    | MySQL | Remarks                        |
| :----- | :---- | :----------------------------- |
| json() | JSON  | Available since version 2.0.14 |

### Drop Table

```php
$this->dropTable('table_name');
```

### Rename Table

```php
$this->renameTable('old_table_name', 'new_table_name');
```

### Add Column

```php
$this->addColumn('table_name', 'col_name', $this->integer());
```

### Drop Column

```php
$this->dropColumn('table_name', 'col_name');
```

### Rename Column

```php
$this->renameColumn('table_name', 'old_column_name', 'new_column_name');
```

### Alter Column

```php
$this->alterColumn('table_name', 'column_name', $this->integer());
```

### Add Primary Key

```php
$this->addPrimaryKey('primary_key_name', 'table_name', ['col_1', 'col_2']);
```

### Drop Primary Key

```php
$this->dropPrimary('primary_key_name', 'table_name');
```

### Create Index

```php
$this->createIndex('index_key_name', 'table_name', ['col_1', 'col_2']);
```

### Drop Index

```php
$this->dropIndex('index_key_name', 'table_name');
```

### Add Foreign Key

```php
$this->addForeignKey('foreign_key_name', 'table_name', 'col_name', 'ref_table_name', 'ref_col_name');
```

### Drop Foreign Key

```php
$this->dropForeignKey('foreign_key_name', 'table_name');
```

### Insert Records

#### Insert single record

```php
$this->insert('table_name', [
	'col_1' => 'value 1',
	'col_2' => 'value 2',
	'col_3' => 'value 3',
]);
```

#### Batch insert

```php
$this->batchInsert('table_name', ['col_1', 'col_2', 'col_3'], [
	['record_1_value_1', 'record_1_value_2', 'record_1_value_3'],
	['record_2_value_1', 'record_2_value_2', 'record_2_value_3'],
	['record_3_value_1', 'record_3_value_2', 'record_3_value_3'],
]);
```

### Raw SQL

```php
$this->execute('CREATE TABLE ...');
```

### Change Database

In `config` folder, create new database connection `db2_name.php`:

```php
<?php

return [
    'class' => 'yii\db\Connection',
    'dsn' => 'mysql:host=localhost;dbname=db2_name',
    'username' => 'root',
    'password' => '',
    'charset' => 'utf8',
];
```

Then in `\config\web.php`, add new database component:

**`\config\web.php`**

```php{5, 12}
<?php

$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';
$db2 = require __DIR__ . '/db2_name.php';

$config = [
	...,
	'components' => [
		...,
		'db' => $db,
		'db2' => $db2,
	]
]
```

In your migration file:

```php{10-14}
<?php

use yii\db\Migration;

/**
 * Handles the creation of table `users`.
 */
class m200725_073858_create_users_table extends Migration
{
	public function init()
	{
		$this->db = 'db2';
		parent::init();
	}

    /**
     * @inheritdoc
     */
    public function up()
    {
        $this->createTable('users', [
            'id' => $this->primaryKey(),
        ]);
    }

    /**
     * @inheritdoc
     */
    public function down()
    {
        $this->dropTable('users');
    }
}
```

## Credits

> Basically I'm just the transporter of the **Yii2** documentation. The full documentation can be found [here](https://www.yiiframework.com/doc/guide/2.0/en/db-migrations).
