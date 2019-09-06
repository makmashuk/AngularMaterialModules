# ALL Material Modules
  Import all the angular material modules into angular project

## Getting Started

##Step-1: Install Angular Material Latest Version
```
npm install --save @angular/material @angular/cdk
npm install --save @angular/animations
npm install @angular/animations@'^5.0.0' @angular/common@'^5.0.0' @angular/compiler@'^5.0.0' @angular/compiler-cli@'^5.0.0' @angular/core@'^5.0.0' @angular/forms@'^5.0.0' @angular/http@'^5.0.0' @angular/platform-browser@'^5.0.0' @angular/platform-browser-dynamic@'^5.0.0' @angular/platform-server@'^5.0.0' @angular/router@'^5.0.0' typescript@2.4.2 rxjs@'^5.5.2'
```

##Step-2 : Import BrowserAnimationsModule into AppModule
```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
```

##Step-3 : Add Themes[ indigo-pink.css | deeppurple-amber.css | pink-bluegrey.css | purple-green.css ] to styles.css :
```
 '@import "~@angular/material/prebuilt-themes/indigo-pink.css";
```


##Step-4 : Install HammerJS and Import to main.ts :
```
 npm install --save hammerjs
 'import 'hammerjs';'
```


##Step-5 : Include the following in index.html : :
```
  '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'

```


### Prerequisites

What things you need to install the software and how to install them

```
NodeJS
Npm
Angular Cli
