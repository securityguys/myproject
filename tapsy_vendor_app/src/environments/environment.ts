// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: 'https://node.tapsy.com.au/api',
  baseImageUrl: 'https://node.tapsy.com.au/images/',
  // baseUrl: 'http://52.64.252.144:3000/api',
  // baseImageUrl: 'http://52.64.252.144:3000/images/',
  // baseUrl: 'http://localhost:3000/api',
  // baseImageUrl: 'http://localhost:3000/images/',
  encrySecretForRequest: 'lo%%&#@5tf4tTU76%$#90G',
  encrySecret: 'lohtTU76%$#90G',
  firebaseConfig: {
    apiKey: "AIzaSyC48kNwvNJpDUc93XbnNOVIE9Gyv0rBeWc",
    authDomain: "tapsy-156800.firebaseapp.com",
    databaseURL: "https://tapsy-156800.firebaseio.com",
    projectId: "tapsy-156800",
    storageBucket: "tapsy-156800.appspot.com",
    messagingSenderId: "768776086017",
    appId: "1:768776086017:web:3a1386d028671e0e919600",
    measurementId: "G-C86SCV3VGK"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
