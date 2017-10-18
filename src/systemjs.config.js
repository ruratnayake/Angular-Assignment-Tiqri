/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@agm/core': 'npm:@agm/core/core.umd.js',
     
      '@angular/animations': 'npm:@angular/animations/bundles/animations.umd.js',
      '@angular/animations/browser': 'npm:@angular/animations/bundles/animations-browser.umd.js',
      '@angular/platform-browser/animations': 'npm:@angular/platform-browser/bundles/platform-browser-animations.umd.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@angular/cdk': 'https://unpkg.com/@angular/cdk/bundles/cdk.umd.js',
      '@angular/cdk/a11y': 'https://unpkg.com/@angular/cdk/bundles/cdk-a11y.umd.js',
      '@angular/cdk/bidi': 'https://unpkg.com/@angular/cdk/bundles/cdk-bidi.umd.js',
      '@angular/cdk/coercion': 'https://unpkg.com/@angular/cdk/bundles/cdk-coercion.umd.js',
      '@angular/cdk/collections': 'https://unpkg.com/@angular/cdk/bundles/cdk-collections.umd.js',
      '@angular/cdk/keycodes': 'https://unpkg.com/@angular/cdk/bundles/cdk-keycodes.umd.js',
      '@angular/cdk/observers': 'https://unpkg.com/@angular/cdk/bundles/cdk-observers.umd.js',
      '@angular/cdk/overlay': 'https://unpkg.com/@angular/cdk/bundles/cdk-overlay.umd.js',
      '@angular/cdk/platform': 'https://unpkg.com/@angular/cdk/bundles/cdk-platform.umd.js',
      '@angular/cdk/portal': 'https://unpkg.com/@angular/cdk/bundles/cdk-portal.umd.js',
      '@angular/cdk/rxjs': 'https://unpkg.com/@angular/cdk/bundles/cdk-rxjs.umd.js',
      '@angular/cdk/scrolling': 'https://unpkg.com/@angular/cdk/bundles/cdk-scrolling.umd.js',
      '@angular/cdk/table': 'https://unpkg.com/@angular/cdk/bundles/cdk-table.umd.js',
      '@angular/cdk/stepper': 'https://unpkg.com/@angular/cdk/bundles/cdk-stepper.umd.js',
      
      // other libraries
      'rxjs': 'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'ng2-completer': 'node_modules/ng2-completer/ng2-completer.umd.js',
      'ngx-cookie': 'npm:ngx-cookie/bundles/ngx-cookie.umd.js',
      'angular2-logger': 'node_modules/angular2-logger'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
