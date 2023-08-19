# Firebase

install Firebase globally
- open powershell and run

```javascript
npm install -g firebase-tools
```

check firebase version 

```javascript
firebase --version
```

firebase login

```javascript
firebase login
```

Goto **VS Code** and run below commond

```javascript
firebase use --add
```


This will redirect you to browser and you need to login your account.


#### Table of content
- Firebase Setup
- Setting up Webpack
- Firebase Install & Setup
- Common Firebae Functions
- Firebase Database & Details
- Adding & Deleting Documents


## Firebae Setup

[Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup)



```javascript
npm install firebase
```



```javascript

```



```javascript

```



## Setting up Webpack

Webpack is an open-source JavaScript module bundler. It is commonly used in web development **to bundle and manage assets like JavaScript files, CSS files, images, and more, making it easier to manage and optimize these assets for deployment in web applications.**


#![Webpackimg](https://nickjanetakis.com/assets/blog/cards/a-few-advantages-of-using-webpack-in-your-next-project-1404b8c0491d68dfc0806167dae0b09745bf016b4e766bed5a672562f69a7531.jpg)

#![Webpack](https://blog.suprabha.me/static/4bf3e6a6522f0585f8ad476848564aba/db955/10-webpack-part-2.png)


Webpack allows developers to create a dependency graph of all the modules and assets in their project. It then processes and transforms these assets, such as transpiling JavaScript with Babel, optimizing images, and bundling multiple files into a single file or a few files. This bundling process can help reduce the number of HTTP requests required to load a web page, which can improve the performance and loading speed of websites.

##### Key Features of Webpack

- Module System
- Loaders
- Plugins
- Code Splitting
- Hot Module Replacement (HMR)
- Asset Optimization
- Configuration
- Webpack Dev Server


### Install Webpack 

```javascript
npm init
```

```javascript
npm i webpack webpack-cli -D
```



## Firebase Install & Setup


## Common Firebae Functions

```javascript
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

```

List: 
- collection
- getFirestore
- doc
- getDoc 
- getDocs
- addDoc 
- setDoc
- updateDoc
- deleteDoc
- query
- onSnapshot
- get
- 
- 
- 

***

Certainly! Here's a list of common Firebase Firestore functions along with a brief description of each:

1. **`collection(db, collectionPath)`**: Creates a reference to a collection within the Firestore database.

2. **`doc(db, documentPath)`**: Creates a reference to a specific document within the Firestore database.

3. **`getDoc(docRef)`**: Retrieves a single document snapshot from the specified document reference.

4. **`getDocs(query)`**: Retrieves multiple document snapshots from a specified collection or query. This is used to fetch multiple documents at once.

5. **`getFirestore(app)`**: Initializes the Firestore service using a Firebase app instance.

6. **`addDoc(collectionRef, data)`**: Adds a new document with auto-generated ID to the specified collection and sets the provided data.

7. **`setDoc(docRef, data, options)`**: Sets the data of a specific document using the provided data.

8. **`updateDoc(docRef, data)`**: Updates the data of a specific document with the provided data. Only the specified fields will be updated.

9. **`deleteDoc(docRef)`**: Deletes a specific document from the Firestore database.

10. **`query(collectionRef, ...queryConstraints)`**: Creates a query on a collection with specified query constraints (e.g., filtering, sorting).

11. **`orderBy(fieldPath, direction)`**: Specifies an order for query results based on a field path and direction (ascending or descending).

12. **`where(fieldPath, opStr, value)`**: Adds a filter to a query, specifying a field, comparison operator, and value to filter documents.

13. **`limit(n)`**: Limits the number of documents returned by a query to a specified number `n`.

14. **`onSnapshot(query, observer)`**: Sets up a real-time listener for query results, invoking the provided observer function whenever the data changes.

15. **`get()`**: (on a Query or DocumentReference): Retrieves a single set of data (either a document snapshot or query snapshot) at a specific point in time.

16. **`batch()`**: Creates a batch object that allows you to perform multiple write operations as a single atomic unit.

17. **`runTransaction(updateFunction)`**: Runs a transaction, ensuring atomic updates to the database and handling conflicts.

18. **`FieldValue` object: Provides special values that can be used in update operations, such as `serverTimestamp()`, `arrayUnion()`, `arrayRemove()`, and more.

These are some of the common functions you can use when working with Firebase Firestore. Keep in mind that Firestore is a flexible and powerful NoSQL database, so you can perform various operations on your data using these functions. Always refer to the official Firebase documentation for detailed information and examples on how to use these functions effectively.


## Firebase Database & Details

Steps: 
- Goto Firebase Dashboard
- Build 
- Firestore Database
- Create Database
    - start with Test mode 
    - Next 
    - Enable



Firebae databse consist of **Collections** & **Documents**. 

#![collection](https://firebase.google.com/static/docs/firestore/images/structure-data.png)


#![databse table](https://www.educative.io/api/edpresso/shot/6141705389604864/image/4696961773993984)


### How to Request / Query the data in firebase

```diff
! Initialize

import { initializeApp } from "firebase/app";

!Import 
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";


! Put Configration from firebase firestore
const firebaseConfig = {
  apiKey: "AIzaSyDaC30Ouqdg6WWCGIYhT7AVoAF670_hguo",
  authDomain: "pakistan-hospital-app.firebaseapp.com",
  projectId: "pakistan-hospital-app",
  storageBucket: "pakistan-hospital-app.appspot.com",
  messagingSenderId: "109878905014",
  appId: "1:109878905014:web:79d99387326092a5a3fe17",
};


! Init fibase app
initializeApp(firebaseConfig);

! Init services
const db = getFirestore();

! Collection ref
const colRef = collection(db, "doctor");

```

.

Get a specific document from the collection **`(replace 'documentId' with the actual document ID)`**

```javascript
getDoc(doc(colRef, 'UfL7QYlsgVznoY1bX5dK')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log('Document data:', snapshot.data());
    } else {
      console.log('Document does not exist');
    }
  }).catch((error) => {
    console.error('Error getting document:', error);
  });

```

.

Get all documents from the collection
```javascript
getDocs(colRef).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log('Document data:', doc.data());
    });
  }).catch((error) => {
    console.error('Error getting documents:', error);
  });
```



### Adding & Deleting Documents

```javascript

```