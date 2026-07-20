# OnlineForm

A web-based application that collects user information, stores it in a MySQL database, displays records dynamically, and allows users to toggle the status value between 0 and 1.

## Technologies Used

- HTML
- CSS
- JavaScript
- PHP
- MySQL
- InfinityFree Hosting

## Development Steps

1. Created a MySQL database using InfinityFree and created an `info` table to store ID, name, age, and status values.

2. Created the frontend interface using HTML to build a form that collects the user's name and age, along with a table to display database records.

3. Created `db.php` to establish a connection between the PHP files and the MySQL database.

4. Created `insert.php` to receive submitted data from the frontend and insert new records into the database.

5. Created `display.php` to retrieve all stored records from the database and return them in JSON format.

6. Used JavaScript Fetch API to communicate with the PHP backend, submit form data, and dynamically display records without refreshing the webpage.

7. Created `toggle.php` to update the status value between 0 and 1 when the toggle button is clicked.

8. Added CSS styling to improve the layout and appearance of the webpage.

## Features

- Add new records using a form
- Store data in MySQL database
- Display all records dynamically
- Toggle status values between 0 and 1
- Update records without reloading the page

## Author

Nassebah Al-Dubayyan