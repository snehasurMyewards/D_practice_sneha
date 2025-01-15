https://docs.google.com/document/d/1-L1dRFWPhFYKzONX3n4W6zsd9hl9gC-IUOrhnx2kDqA/edit?tab=t.0

Goals
Generate a table called details to save additional user background information
Implement an event called UserSaved triggered when a user is created or updated
Implement a listener that auto-saves additional user details when the UserSaved event is triggered

Instructions
Create a migration file for a table called details. Use the following table for reference on the columns: mysql> show columns from details

mysql> show columns from details;
| Null | Key | Default | Extra
| bigint unsigned | NO | PRI❘ NULL | varchar(255)
| Field
| Type
| id | key
auto_increment |
| NO | MUL | NULL
| value
| text
| YES |
| NULL
I
| icon
| varchar(255)
| YES |
| NULL
| status
| varchar(255) | NO |
| 1
| type
| varchar(255)
| YES |
| detail |
| user_id
| created_at
timestamp
| YES |
| NULL
| YES |
| NULL
| bigint unsigned | YES | MUL | NULL
updated_at | timestamp

Generate an Eloquent Model file app/Detail.php.
Assign a one-to-many relationship between App\User model and App\Detail model.
Create an Event class app/Events/UserSaved.
Map the UserSaved Event class on App\User Eloquent Model's saved event.
Create a Listener class app/Listeners/SaveUserBackgroundInformation.php.
Inject the UserService class on SaveUserBackgroundInformation@\_\_construct.
Add a method in the UserService class to handle saving of user details.
The listener should save to a table called details the following information:
The user's full name based on firstname, middlename, and lastname.
The user's middle initial based on abbreviating the middlename.
The user's avatar based on a given photo
The user's gender based on the value of prefixname.

Example data:
for a user with attributes of:
{
id: 1,
prefixname: 'Mr.',
firstname: 'Juan',
middlename: 'Palito',
lastname: 'dela Cruz',
suffixname: 'Jr.',
username: 'juantwothree',
email: 'juan@demo.ph',
photo: null,
type: 'user',
}

✎ Notes
The column details.user_id must be a foreign key that references users.id and cascades on DELETE and UPDATE

php artisan make:migration create_details_table
php artisan migrate
php artisan make:model Detail
php artisan make:event UserSaved
php artisan make:listener SaveUserBackgroundInformation
touch app/Providers/EventServiceProvider.php
php artisan event:clear
php artisan event:cache
mkdir app/Services
touch app/Services/UserService.php
composer dump-autoload
php artisan cache:clear
php artisan config:clear
php artisan make:migration add_user_columns_to_users_table
php artisan make:migration modify_users_table_allow_null_name_password --table=users
php artisan migrate:fresh
remove EventServiceProvider
php artisan make:seeder UserSeeder
php artisan db:seed
php artisan make:factory UserFactory --model=User

step to setup

Laravel Project Setup and Run
This guide covers the setup of a Laravel project, including the generation of the details table, triggering events, saving user background information, and testing the functionality.

Prerequisites
Ensure the following are installed:

PHP (>= 8.0)
Composer
MySQL (or compatible database)
Laravel (version 9 or above)
Step 1: Clone the Repository
Clone the project repository to your local machine:

git clone https://github.com/your-username/your-repo-name.git
https://github.com/snehasur/practice_laravel.git
cd your-repo-name
Step 2: Install Dependencies
Run the following to install the project dependencies via Composer:

composer install
Step 3: Set Up Environment File
Copy the .env.example file to .env:

cp .env.example .env
Step 4: Generate Application Key
Generate a unique application key:

php artisan key:generate
This will set the APP_KEY in the .env file.

Step 5: Configure Database
Create a new MySQL database (e.g., your_database_name).
Update the .env file with your database details:
env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_database_user
DB_PASSWORD=your_database_password
Step 6: Run Migrations
Run the migrations to create necessary tables:

php artisan migrate
Step 7: Seed the Database
To populate the database with sample data (users):

php artisan db:seed
This will run the database seeder, which may include sample user data.

Step 8: Run the Development Server
Start the development server:

php artisan serve
The app will run at http://127.0.0.1:8000.

Step 9: Test the Application
Create or Update Users: The UserSaved event will trigger and automatically save additional user details in the details table.
Check the details Table: Verify the extra user information (full name, middle initial, avatar, gender) is saved.

This step-by-step guide sets up the project, configures the database, runs migrations, seeds the data, and provides the necessary commands to test and interact with the application.
