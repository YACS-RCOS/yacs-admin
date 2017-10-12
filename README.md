# yacs-admin
Admin panel for the [YACS](https://github.com/YACS-RCOS/yacs) app. This repository contains two folders:

- `yacs-admin` - legacy Rails code
- 'yacs-admin-angular' - current Angular application (in development)

# Legacy

## Current Functionality
Shows all courses, departments, schools, and sections in each model's respective index page. Individual courses, departments, schools, and sections can also be viewed. Courses can be searched by department name/code, course name/description, and section instructors.

## Future Functionality
Will implement full CRUD support once it is in YACS API.
All add/update/delete operations will require authentication via login (possible CAS authentication integration).

## Setup
Clone this repository onto your local machine. Navigate to the `yacs-admin` directory and type `rails s` into the command line. You should now have a running instance of YACS Admin on http://localhost:3000.

# Angular

All instructions for the Angular app can be found in the README.md file in `yacs-admin-angular`.
