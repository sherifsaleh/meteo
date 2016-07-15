## Angular 2 experimental web app with google maps, tweets and weather

Angular 2 implements Express server to work on heroku: https://meteo-tweets.herokuapp.com/


## Install
```bash
git clone git@github.com:sherifsaleh/meteo.git
cd meteo

# Install dependencies
npm install

# start server
npm run develop

# Generated to public : public/assets/js/bundle.min.js (Production)
npm run bundle:prod


# Applciation url: http://localhost:3000
```

## Development
Uncomment in public/index.html:

```html
<script src="assets/js/systemjs.config.js"></script>
<script>
    System.import('app').catch(function(err) { console.error(err); });
</script>
```

Comment out
```html
<!-- Production mod -->
<script src="js/bundle.min.js"></script>
```
# meteo

Is a experimental web app with angualr 2, integrating google maps, openweathermap, and codebird ( for twitter )
