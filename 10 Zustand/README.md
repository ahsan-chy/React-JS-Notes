## Zustand

[How to use Zustain](https://refine.dev/blog/zustand-react-state/#getting-started-with-zustand)

[How to use Zustand TypeScript](https://dev.to/franklin030601/using-zustand-with-react-js-9di)

```javascript
npm install zustand
```

```javascript
import create from "zustand";

import { devtools, persist } from "zustand/middleware";
```

Create

```javascript
export const useStore = create((set) => ({
  count: 0,
}));
```

Access Count

```javascript
import { useStore } from "./store/Zustand.js";

const CounterApp = () => {
  const count = useStore((state) => state.count);

  return <h2>{count}</h2>;
};
```

Access **`useStore`** outside the component

```javascript
import { useStore } from "./store/zustand.js";

const state = useStore.getState();
```

**SetState**

```javascript
useStore.setState({ count: 40 });
```

**subscribe**

```javascript
useStore.subscribe(() => console.log("subscribe"));
```

To define the store we use the **create** function.

```javascript
export const useBookStore = create();

or;

export const useBookStore = create(() => ({}));
```
