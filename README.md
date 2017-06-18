# Heroku Django Webpack React Template

1. Create your working environment.
2. Install Django - `pip install django`
3. Create a new project using this template

## Creating Your Project

    $ django-admin startproject PROJECT_NAME --template https://github.com/ergusto/template/archive/master.zip

Install the Python dependencies:

    $ pip install -r requirements.txt

Install the JS dependencies and start the webpack hot module replacement server:

    $ npm install
    $ npm run watch 

Serve:

    $ heroku local

## Deployment to Heroku

    $ git init
    $ heroku create PROJECT_NAME
    $ heroku git:remote -a PROJECT_NAME
    $ heroku buildpacks:set heroku/python
    $ heroku buildpacks:add --index 1 heroku/nodejs
    $ heroku config:set SECRET_KEY=$(python -c 'import random; import string; print("".join([random.SystemRandom().choice("{}{}{}".format(string.ascii_letters, string.digits, string.punctuation)) for i in range(50)]))')
    $ git add .
    $ git commit -m 'first commit'
    $ git push heroku master

## Further Reading

- [Django Webpack Loader](https://github.com/owais/django-webpack-loader)
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server)
- [WhiteNoise](https://warehouse.python.org/project/whitenoise/)
- [Gunicorn](https://warehouse.python.org/project/gunicorn/)
- [dj-database-url](https://warehouse.python.org/project/dj-database-url/)