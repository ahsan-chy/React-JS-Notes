# Styled Components

Installation

```javascript
npm install styled-components
```

[Styled Component](https://styled-components.com/docs/basics#installation)

---

Import

```javascript
import styled from "styled-components";
```

#### div, section

```javascript
export const TodoWrapper = styled.div`
  width: 100%;
  background-color: #fff;
`;
```

#### h1, h2, h3, h4, h5, h6, p

```javascript
export const TodoTitle = styled.h1`
  font-size: 17px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 0.6px;
  color: #3d3b3b;
`;
```

#### img

- Method 1 for **JPG, PNG**

```javascript
import Squre from "../assets/square.png";

export const SqureIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${Squre});
  background-size: cover;
  cursor: pointer;
`;
```

- Method 2 for svg

```javascript

```

#### use Styled Components

```javascript
import { SqureIcon, TodoTitle, TodoWrapper } from "./style";
```

```javascript
<TodoWrapper>
  <SqureIcon />
  <TodoTitle> This is first todo </TodoTitle>
  <MenuIcon />
</TodoWrapper>;
```

#### Button

```javascript
// The Button from the last section without the interpolations
const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```



#### 

```javascript

```



#### 

```javascript

```
