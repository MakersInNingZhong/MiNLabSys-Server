# MiNLabSys-Server

This is the code of main server in MiNLabSytem Project.

This project is using Node.js, Express and Mysql.

You should set up your Mysql datebase and make a new file called dbinfo.json in the project directory before you run the code.

dbinfo.json should be like this:

```json
{
    "user": "your db user",
    "passwd": "your password to the user",
    "db": "the db you use"
}
```

After that, just simply run:

```bash
$ npm install
$ node server
```

## Feature: Door Access

You should set up a table called "member" in your db like this:

```
+----+-----------------+--------+------------+
| id | uid             | name   | enddate    |
+----+-----------------+--------+------------+
|  1 | xxx,xxx,xxx,xxx | xxx    | 20xx-xx-xx |
+----+-----------------+--------+------------+
```

id is the primary key

uid is a string of IC card uid. **IMPORTANT: xxx is a DEC number.** uid should be unique.

name is the person's name.

enddate is the date after which the person's access will be expired.

To make a door controller, see: [MiNLabSys-Door](https://github.com/MakersInNingZhong/MiNLabSys-Door)