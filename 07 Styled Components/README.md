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

- Method 2 for SVG - PNG - JPEG

```javascript
import MaintenanceIcon from '@/assets/images/empty-maintenance-contacts.svg';  // PNG- SVG - JPEG.....

 <CoverIcon src={icon} alt="" />


const CoverIcon = styled.img({
  //Image properties
});

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



## Styled Component Passing `props`

#### Method 1: 
```javascript
const ContentSection = styled.div`
  border-bottom: ${(noBorder) => (noBorder ? '0' : '1px solid #e6e7e8')};
`;

<ContentSection noBorder>
  {/* Content without border */}
</ContentSection>
```

#### Method 2
```javascript
import styled, { css } from 'styled-components';

const ContentSection = styled.div`
  ${({ border }) => border
    ? css`
        border-bottom: 1px solid #e6e7e8;
      `
    : css`
        border-bottom: 0;
      `}
`;
```

- Style using &

```javascript

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  padding-left: ${({ hasLeftIcon }) => (hasLeftIcon ? '30px' : '10px')};
  display: block;
  border: 1px solid #e6e7e8;
  border-radius: 5px;
  font-size: 14px;
  color: #4e3423;

  &::placeholder {
    color: #1c1b1f;
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border: 1px solid #b9bec7;
    box-shadow: 0px 1px 15px rgba(174, 174, 174, 0.25);
  }

  &:disabled {
    background: #e6e7e8;
  }

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #d93d3d;
    `}

  ${(props) =>
    props.type === 'number' &&
    css`
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &:hover {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      }
    `}
`;
```


#### Method 3
```javascript
const CustomTheadComponent = styled.div(({ border }) => ({

borderBottom: border ? '1px solid #e6e7e8' : 'none',

 }));
```

```javascript

```

#### 

```javascript

```



#### 

```javascript

```
