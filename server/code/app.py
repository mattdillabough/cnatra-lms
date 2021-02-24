#### IMPORTS

# python imports
from flask import Flask

# project imports


#### APP SETUP

# initialize app
app = Flask(__name__)


#### ROUTE CONFIG
@app.route('/')
def index():
    return 'Hello World'


#### RUN APP
if __name__ == "__main__":
    app.run(debug=True)
