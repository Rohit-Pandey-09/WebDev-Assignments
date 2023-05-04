Q1. What is RDBMS? Why do industries use RDBMS?

Ans1. A relational database is a type of database that stores and provides access to data points that are related to one another. Relational databases are based on the relational model, an intuitive, straightforward way of representing data in tables.


Q2. Explain the relationship data model in depth.

Ans2.The relational model in DBMS is an abstract model used to organize and manage the data stored in a database. It stores data in two-dimensional inter-related tables, also known as relations in which each row represents an entity and each column represents the properties of the entity.


Q3. What is the importance of Relationships in a Database management system? Explain the types
of relationships.

Ans3. It helps improve table structures and reduce redundant data. Understanding relationship in databases is important as it allows you to fetch data from multiple tables simultaneously and helps ensure that data in databases are consistent and updated.


Q4. Explain the different types of Keys in RDBMS considering a real-life scenario.

Ans4. There are several types of keys in a RDBMS that are used to identify tuples (rows) uniquely in a table and set up relations amongst various columns and tables of a relational database.

Candidate Key: The minimal set of attributes that can uniquely identify a tuple is known as a candidate key. It is a minimal super key with no repeated data.
Primary Key: There can be more than one candidate key in relation out of which one can be chosen as the primary key. It is a unique key that can identify only one tuple at a time and has no duplicate values.
Super Key: The set of attributes that can uniquely identify a tuple is known as Super Key.
Foreign Key: A foreign key is an attribute or combination of attribute in one base table that points to the candidate key (generally it is the primary key) of another table. The purpose of the foreign key is to ensure referential integrity of the data.


Q5. Write a short note on Single Responsibility Principle.

Ans5. In RDBMS, SRP can be applied to the design of tables and their relationships. Each table should have a single, well-defined responsibility and should only contain data that is relevant to that responsibility. This can help to reduce the complexity of the database schema and make it easier to understand and maintain.


Q6. Explain the different types of errors that could arise in a denormalized database.

Ans6. Error that can arise in a denormalized database is an update anomaly. Since data may be duplicated in a denormalized database, it is possible that one piece of data is updated while another duplicated location is not, which will result in a data inconsistency 2. This places extra responsibility on the application or database system to maintain the data and handle these errors.


Q7. What is normalization and what is the need for normalization?

Ans7. Normalization is a database schema design technique, by which an existing schema is modified to minimize redundancy and dependency of data 1. The process involves organizing data into tables and establishing relationships between those tables according to rules designed to protect the data and make the database more flexible by eliminating redundancy and inconsistent dependency.
The need for normalization arises from the problems that can occur when data is stored in large, unorganized tables. These problems can include data redundancy, where the same data is stored in multiple locations, and update anomalies, where changes to data in one location are not reflected in other locations. Normalization helps to eliminate these problems by organizing data into smaller, more focused tables with well-defined relationships.


Q8. List out the different levels of Normalization and explain them in detail.

Ans8. The most common normal forms are:

First Normal Form (1NF): A table is in 1NF if it contains atomic values and there are no repeating groups.
Second Normal Form (2NF): A table is in 2NF if it is in 1NF and all non-key attributes are fully dependent on the primary key.
Third Normal Form (3NF): A table is in 3NF if it is in 2NF and there are no transitive dependencies.
Boyce-Codd Normal Form (BCNF): A table is in BCNF if it is in 3NF and every determinant is a candidate key.
There are also higher levels of normalization, such as Fourth Normal Form (4NF) and Fifth Normal Form (5NF), but they are less commonly used.


Q9. What are joins and why do we need them?
Ans9. A JOIN clause is used to combine rows from two or more tables based on a related column between them. Joins are used to stitch the database back together to make it easy to read and use. They match rows between tables.
Joins are needed because data is often stored in multiple tables in a database.


Q10. Explain the different types of joins?
Ans10. There are several types of joins, including INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN 3. Each type of join returns a different result set based on how the tables are related.
