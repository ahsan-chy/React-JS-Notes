# Import () Export () - Moduler - Namespaced Components

Table of content

- Export - Default - Named
- Import - Default - Named
- Moduler 
- Namespaced
- Import Order - Eslint
-

## Export

[Export Documentation Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)

- **Default Export**

```javascript
// export feature declared elsewhere as default
export { myFunction as default };
// This is equivalent to:
export default myFunction;

// export individual features as default
export default function () { /* … */ }
export default class { /* … */ }
```

The export default syntax allows any expression.

```javascript
export default 1 + 1;
```

```javascript

```

- **Named exports**

```javascript
function cube(x) {
  return x * x * x;
}

const foo = Math.PI + Math.SQRT2;

const graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw() {
    console.log("From graph draw function");
  },
};

export { cube, foo, graph };
```


```javascript
import { cube, foo, graph } from "./my-module.js";
```


```javascript
// In childModule1.js
function myFunction() {
  console.log("Hello!");
}
const myVariable = 1;
export { myFunction, myVariable };
```

All Type of Exports with Example 
```javascript
// Exporting declarations
export let name1, name2/*, … */; // also var
export const name1 = 1, name2 = 2/*, … */; // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;

// Export list
export { name1, /* …, */ nameN };
export { variable1 as name1, variable2 as name2, /* …, */ nameN };
export { variable1 as "string name" };
export { name1 as default /*, … */ };

// Default exports
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// Aggregating modules
export * from "module-name";
export * as name1 from "module-name";
export { name1, /* …, */ nameN } from "module-name";
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name";
export { default, /* …, */ } from "module-name";
export { default as name1 } from "module-name";
```


## Import

[Import Documentation Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)


Forms of import declarations

- Named import: **`import { export1, export2 } from "module-name";`**`
- Default import: **`import defaultExport from "module-name";`**`
- Namespace import: **`import * as name from "module-name";`**`
- Side effect import: **`import "module-name";`**`


</br>

- **Named Import**

```javascript

import { myExport } from "/modules/my-module.js";

import { foo, bar } from "/modules/my-module.js";

import { reallyReallyLongModuleExportName as shortName } from "/modules/my-module.js";
```


- **Default Import**

```javascript
import myDefault from "/modules/my-module.js";

import myDefault, * as myModule from "/modules/my-module.js";

import myDefault, { foo, bar } from "/modules/my-module.js";
```

- **Namespace import**

```javascript
import * as myModule from "/modules/my-module.js";
```

- **Import a module for its side effects only**

Import an entire module for side effects only, without importing anything. This runs the module's global code, but doesn't actually import any values.

```javascript
import "/modules/my-module.js";
```



```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { default as alias } from "module-name";
import { export1, export2 } from "module-name";
import { export1, export2 as alias2, /* … */ } from "module-name";
import { "string name" as alias } from "module-name";
import defaultExport, { export1, /* … */ } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
```

```javascript

```



## Moduler 

```javascript
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
```


## Namespaced 

```javascript


```


***

### [Import Order - Eslint](https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/order.md)



