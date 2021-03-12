# Backend

Just follow the steps below to set up the development enviroment for the backend.

1. Make sure you are in the backend directory of this project:

    ```sh
    cd server
    ```

2. Install all packages and dependencies:

    2.1 Create a virtual environment called *venv*. NOTE: if you don't already have *virtualenv* installed, then you'll need to install it (see below)
    ```sh
    pip install virtualenv
    virtualenv venv
    ```
    2.2 Activate the virtual environment:

        For Windows:
    ```sh
        source venv/Scripts/activate
    ```
        For MacOS/Linux:
    ```sh
        source venv/bin/activate
    ```
    Once successfully activated, (venv) should be displayed in your terminal above or in front of your current line.

    2.3 Install necessary libraries

    ```sh
    pip install -r requirements.txt
    ```

You now should be able to run the backend with the following:
```sh
python code/app.py
```