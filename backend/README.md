# Django & Django REST Framework Project

This project is a Django-based web application with Django REST Framework (DRF) for creating RESTful APIs.

## Installation and Setup

Follow the steps below to install and set up the project:

1. **Clone the repository and set up the environment:**

   First, clone the repository to your local machine and set up a virtual environment to isolate your project dependencies:

   ```bash
   git clone git@github.com:edgar-spiller/onfonmobile_ke.git
   cd onfonmobile_ke
   ```

   # Create and activate a virtual environment
   # For macOS/Linux:

   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
   # For Windows:
   ```bash
   python -m venv venv
   venv\Scripts\activate
    ```

    # migrate 
    ```bash
    python manage.py migrate
    ```

    # create superuser 
    ```bash
    python manage.py createsuperuser
    ```

    # runserver
    ```bash
    python manage.py runserver
    ```

