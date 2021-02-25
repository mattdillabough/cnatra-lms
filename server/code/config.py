# python imports
from dotenv import load_dotenv
from os import environ, path

# project imports

basedir = path.abspath(path.dirname(__file__))
load_dotenv(path.join(basedir, '.env'))


class Config:
    '''
    Base configuation
    '''

    DATABASE_URI = environ.get('DATABASE_URI')


class DevConfig(Config):
    FLASK_ENV = 'development'
    DEBUG = True
    TESTING = True


class ProdConfig(Config):
    '''
    Production configuration
    '''

    FLASK_ENV = 'production'
    DEBUG = False
    TESTING = False

