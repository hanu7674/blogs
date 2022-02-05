import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    // apiKey: 'AIzaSyAHOZ7rWGDODCwJMB3WIt63CAIa90qI-jg',
    // authDomain: 'test-4515a.firebaseapp.com',
    // databaseURL: 'https://test-4515a.firebaseio.com',
    // projectId: 'test-4515a',
    // storageBucket: 'test-4515a.appspot.com',
    // messagingSenderId: '964743099489'
    apiKey: 'AIzaSyCK2Ftuakb2IgzzTMACLJzcJ9nO5Q99woA',
    authDomain: 'blogs-99c53.firebaseapp.com',
    databaseURL: 'https://blogs-99c53.firebaseio.com',
    projectId: 'blogs-99c53',
    storageBucket: 'blogs-99c53.appspot.com',
    messagingSenderId: '922464276552',
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'Green',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/blogs-99c53.appspot.com/o/751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=38f8d69b-9605-4410-849a-a79703612884',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#00b1b3',
    secondaryColor: '#4d545d'
  }
}
