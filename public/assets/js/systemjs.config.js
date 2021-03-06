var isPublic = typeof window != "undefined";

/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'client', // 'dist',
        '@angular':                   (isPublic)? '@angular' : 'node_modules/@angular',
        '@angular/router':            (isPublic)? '@angular/router' : 'node_modules/@angular/router',
        'angular2-in-memory-web-api': (isPublic)? 'angular2-in-memory-web-api' : 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       (isPublic)? 'rxjs' : 'node_modules/rxjs',
        'ng-semantic':                (isPublic)? 'ng-semantic' : 'node_modules/ng-semantic',
        //'angular2-google-maps':       'node_modules/angular2-google-maps'
        //'angular2-google-maps':       'https://npmcdn.com/angular2-google-maps@0.12.0'
        'angular2-google-maps':         (isPublic)? 'angular2-google-maps' : 'node_modules/angular2-google-maps',
        'codebird':                     (isPublic)? 'codebird' :'node_modules/codebird/'


    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { main: 'index.js', defaultExtension: 'js' },
        'ng-semantic':                { main: 'ng-semantic', defaultExtension: 'js' },
        'angular2-google-maps/core':  { defaultExtension: 'js', main: 'index.js' },
        'codebird':                   { main: 'codebird', defaultExtension: 'js' }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'forms',
        'platform-browser',
        'platform-browser-dynamic',
        'router-deprecated',
        'upgrade'
    ];
    // Individual files (~300 requests):
    function packIndex(pkgName) {
        packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
    }
    // Bundled (~40 requests):
    function packUmd(pkgName) {
        packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
    }

    packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

    // Most environments should use UMD; some (Karma) need the individual index files
    var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
    // Add package entries for angular packages
    ngPackageNames.forEach(setPackageConfig);
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);
