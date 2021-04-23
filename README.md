# CNATRA-LMS Gradebook

This full-stack web application that was developed for the Chief of Naval Air Training (CNATRA) program. In particular, this project focused on building out features for CNATRA's learning management system gradebook.

## Table of Contents

- <a href="#Project-Features">Project Features</a>
- <a href="#Running-the-app">Running the App (development mode)</a>
- <a href="#Cross-device-testing">Cross Device Testing</a>
- <a href="#Areas-of-Improvement">Areas of Improvement</a>

### <a id="Project-Features">Project Features</a>

At this time, a user is able to:

- Navigate to different sections of the LMS via the Navigation bar
- Navigate to a gradesheet via selecting the Navigation Stage and the Most Recent gradesheet for the student Canham, Daniel
- Within a gradesheet, a user can edit several gradesheet detail fields and any maneuver via the edit buttons
- A user can navigate between gradesheets via the navigation buttons at the top of the gradesheet screen
- Navigate to Canham, Daniel's Grade Comparison table to view maneuver grades across multiple events

A demo of this project can be found [here](https://www.youtube.com/watch?v=VQ9EJvWmKuY)

### <a id="Running-the-app">Running the app (in development mode)

**<a id="Run-backend">On the backend:</a>**

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

3.  You now should be able to run the backend with the following:

    ```sh
    python code/app.py
    ```

In the browser, you should see 'Hello World' at [http://localhost:5000](http://localhost:5000)

**To run the the frontend:**

1. Navigate to the frontend directory:

   ```sh
   cd frontend
   ```

2. Make sure all the necessary dependencies are installed:

   ```sh
   npm install
   ```

3. Run the React app:

   ```sh
   npm start
   ```

   The frontend React app should be visible at [http://localhost:3000](http://localhost:3000)

- Note: If you would like to test the app on a single port, across multiple devices via a single running server please refer to the section <a href="#Cross-device-testing">Cross device testing'</a> below

### <a id="Cross-device-testing">Cross Device Testing</a>

This application can be tested across multiple devices via a single server using a tool like **Ngrok**, which creates a temporary public url from which you can access the application.

You can learn how to download [Ngrok](https://ngrok.com/product) to your computer via their website, or if download an extension via your code editor, such as [this one for VSCode](https://marketplace.visualstudio.com/items?itemName=philnash.ngrok-for-vscode).

#### Setting up the application

**Note**: Changing the application in this way will prevent the application from 'hot-reloading'. That is, if you save changes to the application they won't immediately be reflected in the application.
You will need to create another build of the application and refresh and/or restart the server.

**Backend Changes**
In `app.py`:

1. Change the initialization of the Flask app to include the static folder where the frontend build is located, and include the static url path as well.

   For example:

   ```sh
   app = Flask(__name__, static_folder='../../frontend/build',static_url_path='/')
   ```

2. Under the app's route config, return index.html instead of a string

   For example:

   ```sh
   @app.route('/')
   def index():
       return app.send_static_file('index.html')
   ```

**Frontend Changes**

1.  Within the redux store, `frontend/src/Store` all axios calls to the backend should be changed to relative paths.

    For instance, in `frontend/src/Store/grades` at the top of the file the creation of an axios instance should be commented out:
    `sh const baseURL = "http://localhost:5000"; const instance = axios.create({ baseURL }); `
    Subsequently, all axios instances should be changed to directly call axios.

    Change

        ```sh
            const details = await instance.get(
            `/server/students/${username}/grade_sheets/${evt_code}`
            );
        ```

    to this

        ```sh
        const details = await axios.get(
            `/server/students/${username}/grade_sheets/${evt_code}`
        );
        ```

2.  Create a build of the frontend for the backend to serve.

    ```sh
        npm run build
    ```

**Start the server**

1. Start the server by following the directions to <a href="#Run-backend">start the backend</a>

   At [http://localhost:5000](http://localhost:5000) the React application should be visible.

**Connect the application to ngrok**
If you are using the VSCode ngrok extension:

1. Open the command palette
2. Select `ngrok:start`
3. Type in `5000` when prompted to 'Choose tunnel or enter port number'
4. Open the generated QR code or url in the browser
   - The url can then be shared with others to view the application on their devices

### <a id="Areas-of-Improvement">Areas of Improvemnt</a>

Please see each frontend & backend (server) `README.md` files for notes on areas of improvement.
