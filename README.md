# cnatra-lms

### Running the app

To run this app ensure that in the frontend you have done the following:

1. `cd frontend`
2. Installed the necessary dependencies, `npm install`
3. Created a build of the project by running `npm run build`

Then on the backend:

1.  Make sure you are in the backend directory of this project:

    ```sh
    cd server
    ```

2.  Install all packages and dependencies:

    2.1 Create a virtual environment called _venv_. NOTE: if you don't already have _virtualenv_ installed, then you'll need to install it (see below)

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

You should then be able to see the project run on [http://localhost:5000](http://localhost:5000)
