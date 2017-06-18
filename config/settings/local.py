import os
from .base import *

DEBUG = True

SECRET_KEY = "!v$x-!@1jcgw^)h#=fwj2y=3l9k(1st@0ailrrfwg6aeyyz=o9"

# Database
# https://docs.djangoproject.com/en/1.11/ref/settings/#databases

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql_psycopg2",
        "NAME": "shoppinglist",
        "USER": "",
        "PASSWORD": "",
        "HOST": "localhost",
        "PORT": "5432",
     }
}

# django-webpack-loader

WEBPACK_LOADER = {
        'DEFAULT': {
            'BUNDLE_DIR_NAME': 'build/',
            'STATS_FILE': os.path.join(PROJECT_DIR, 'client/webpack/stats.local.json'),
        }
}