/*
 * --> Do this before hand to update all dependenceis to latest version
 * npm install @angular/animations@'^5.0.0' @angular/common@'^5.0.0' @angular/compiler@'^5.0.0' @angular/compiler-cli@'^5.0.0' @angular/core@'^5.0.0' @angular/forms@'^5.0.0' @angular/http@'^5.0.0' @angular/platform-browser@'^5.0.0' @angular/platform-browser-dynamic@'^5.0.0' @angular/platform-server@'^5.0.0' @angular/router@'^5.0.0' typescript@2.4.2 rxjs@'^5.5.2'
 * ////// To use angular material in project , do the folowing : 
 * npm install --save @angular/material @angular/cdk
 * npm install --save @angular/animations
 * - Import this module into the module that need angular material always after the BrowserModule import
 * - Add the following to styles.css : '@import "~@angular/material/prebuilt-themes/indigo-pink.css";'
 * --------------------------------------------------------------------------------/deeppurple-amber.css
 * --------------------------------------------------------------------------------/pink-bluegrey.css
 * --------------------------------------------------------------------------------/purple-green.css
 * npm install --save hammerjs
 * - Add the following to main.ts : 'import 'hammerjs';'
 * - Include the following in index.html : '<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'
 */
import { NgModule } from '@angular/core';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{

  // Form control modules of angular material
  MatAutocompleteModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule
  // --ENd form control module import

  ,

  // Navigation modules of angular material
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule
  // --End navigation module import 

  ,

  // Layout modules of angular material
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule
  // --End layout module import

  ,

  // Button modules
  MatButtonModule, 
  MatButtonToggleModule, 
  MatChipsModule, 
  MatIconModule, 
  MatProgressSpinnerModule,
  MatProgressBarModule
  // -- End button modules import
  , 

  // Popup and modal modules
  MatDialogModule, 
  MatTooltipModule, 
  MatSnackBarModule
  // --End popup & modals import

  ,

  // Data table modules
  MatTableModule, 
  MatSortModule, 
  MatPaginatorModule,
  MatDatepickerModule,
  MatNativeDateModule,
  // --End data table import



  }from '@angular/material';

@NgModule({
  imports: [
  
  MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, 
  MatToolbarModule,MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, 
  MatExpansionModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, 
  MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, 
  MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule,MatDatepickerModule,MatNativeDateModule
  ],
  exports: [
  
  MatAutocompleteModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRadioModule,
  MatSelectModule, MatSliderModule, MatSlideToggleModule, MatMenuModule, MatSidenavModule, 
  MatToolbarModule,MatListModule, MatGridListModule, MatCardModule, MatStepperModule, MatTabsModule, 
  MatExpansionModule, MatButtonModule, MatButtonToggleModule, MatChipsModule, MatIconModule, 
  MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule, MatTooltipModule, 
  MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule,MatDatepickerModule,MatNativeDateModule
  ]
})
export class MaterialModule { }
