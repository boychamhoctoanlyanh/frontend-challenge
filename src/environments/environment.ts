// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// export const environment = {
//   production: false
// };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDkgssmG1Xu34-oI_FFwEG2TXKJpfT0k9o',
    authDomain: 'fe-challenge-6461d.firebaseapp.com',
    databaseURL: 'https://fe-challenge-6461d.firebaseio.com',
    projectId: 'fe-challenge-6461d',
    storageBucket: 'fe-challenge-6461d.appspot.com',
    messagingSenderId: '242311772470'
  }
};
