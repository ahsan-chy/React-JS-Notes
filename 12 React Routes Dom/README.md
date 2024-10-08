# React Router Dom

Table of Content

- Install React Router Dom
- Initial Setup
- Protected/Private Routes
- Error/404 Page
- Nested Routes
  - Relative Links
- Components
  - Link
  - NavLink
  - Index
  - Outlet
  - Navigate
  - replace
  - Location
  - Replace
- Conditional Rendering
- Hooks
  - useParam
  - useMatch
  - useLocation
  - useHistory
  - useRouterMatch
- Older vs New Router Tags/Components/Hooks
- **`<ErrorBoundary >`**
- **`<Suspense>`**
- Fallback
- Different Scenarios and How Router Dom help there
  - Click on specific product and move to that product with id
  - Breadcrumb with Router
  - Back to last page navigate(-1)
  -

### Install React Router Dom 6

[Install Router Documentation](https://reactrouter.com/en/dev/upgrading/reach#install-react-router-v6)

```javascript
npm install react-router@6 react-router-dom@6
```

### Initial Setup

- BrowserRouter
- Routes, Route
- Default Route
- Redirect

[Detail Documentation](https://reactrouter.com/en/main)

##### BrowserRouter

```javascript
// React Router v6
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

##### Routes, Route

```javascript
// React Router v6
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  {/* ... */}
</Routes>;
```

##### Default Route

```javascript
// React Router v6
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

#### `<Redirect/>, redirectTo, isRedirect`

**`<Redirect>` is now `<Navigate>`**

```javascript

```

#### PrivateRoutes/ Protected Route/ Public Route

[Medium Detail Article About Creating Protected Routes](https://medium.com/@dennisivy/creating-protected-routes-with-react-router-v6-2c4bbaf7bc1c)

This is **`App.js/ Route.js`** Where you are setting up React Router Dom.

- First Method to Apply PrivateRoutes **Prefered**

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./utils/PrivateRoutes";

<Router>
  <Routes>
    <Route element={<PrivateRoutes />}>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile />} />
    </Route>

    <Route path="/login" elements={<login />} />
  </Routes>
</Router>;
```

- 2nd Method to Setup PrivateRoutes

```javascript
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protected from "./utils/Protected";

<Router>
  <Routes>
    <Route exact path="/" element={<Protected component={Home} />} />
    <Route exact path="/profile" element={<Protected component={Profile} />} />

    <Route path="/login" elements={<login />} />
  </Routes>
</Router>;
```

**Protected Route**
[React Role base Protected Routes](https://www.robinwieruch.de/react-router-private-routes/)

```javascript
import { Navigate, Outlet } from "react-router";

const Protected = () => {
  const user = localStorage.getItem("user");
  //   console.log('user Data', user);

  return !user ? <Navigate to="/login" replace /> : <Outlet />;
};

export default Protected;
```

[Article Link](https://www.positronx.io/react-protected-routes-with-react-router-tutorial/)

##### Add Multiple Protected Routes

```javascript
{
  /* //+ Protected Routes */
}
<Route element={<Protected isAllowed={!!user && user.role.includes("admin")} />}>
  {" "}
  // You can put and allow admin, Manager, Hr, Multiple Roles
  <Route path="/profile" element={<Profile />} />
</Route>;
```

```javascript
import { Navigate, Outlet } from "react-router";

const Protected = ({ isAllowed, children }) => {
  if (!isAllowed) {
    return <Navigate to="/login" replace />;
  }

  return children ? children : <Outlet />;
};

export default Protected;
```

#### Error/404 Page

```javascript
<Route path="*" element={<NotFound />} />
```

### Nested Routes

Setup the Nested Routes

```javascript
<Route path="profile" element={<Profile />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="appointments" element={<Appointments />} />
  <Route path="schedulemeeting" element={<ScheduleMeeting />} />
</Route>
```

#### Relative Links

[React Router - Relative Links Example](https://jasonwatmore.com/post/2020/03/26/react-router-relative-links-example)

[Relative Links](https://reactrouter.com/en/main/start/overview#relative-links)

![Relative Links](https://github.com/ali-ahmad98/firebase-crud-app/assets/51714591/d7b17fde-c132-422e-8a25-aac242244b6c)

#### Components

```javascript

```

### Hooks

- useLocation()
- useParams()
- useNavigate()
- useNavigation()
- useParams()
- useOutlet
- 

#### useLocation()

useLocation is a hook allows you to access the **current location information** in a React component. The location information includes details about the current URL, such as **`the pathname, search parameters, and hash.`**

```javascript
import { useLocation } from "react-router-dom";

const location = useLocation();

const currentPath = location.pathname;
```

or You can destructure and use location

```javascript
import { useLocation } from "react-router-dom";

const { pathname } = useLocation();
```

Output variable

```javascript
{
    "pathname": "/",
    "search": "",
    "hash": "",
    "state": null,
    "key": "default"
}
```

- Key:
  It generated unique value on every page

- pathname:

- search:
  When you pass something in url like this. `http://localhost:5176/?age=1` It will result in search like this

```diff
! search:"?age=1"
```

- hash:
  Represents the URL hash fragment (including the leading # character).

```javascript
//localhost:5176/#333

http: hash: "#333";
```

- State
  If you want to send some/large of data with state then you can send it through state.

```javascript
import { Link } from "react-router-dom";

<Link
  to={{
    pathname: "/destination-route",
    state: {
      someData: "Hello from the source route",
      user: {
        username: "john_doe",
        email: "john@example.com",
      },
    },
  }}>
  Go to Destination Route
</Link>;
```

```javascript
import { useLocation } from "react-router-dom";

function DestinationRoute() {
  const location = useLocation();
  const { someData, user } = location.state;

  return (
    <div>
      <p>{someData}</p>
      <p>User Info:</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default DestinationRoute;
```



**Make Breadcrumb using `useLocation`**

[Making Breadcrumbs (useLocation hook)](https://youtu.be/zy8rqihtvA8?list=TLPQMjMxMDIwMjP3rLXJvzOQjw)

```javascript
import React from 'react';
import styled from 'styled-components';
import { Breadcrumb } from 'antd';

import { useLocation } from 'react-router-dom';

function CustomBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <StyledBreadcrumb>
      <BreadcrumbItem>Main Office</BreadcrumbItem>
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1;

        return (
          <BreadcrumbItem key={name}>
            {isLast ? (
              <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
            ) : (
              <span> {name.charAt(0).toUpperCase() + name.slice(1)} </span>
            )}
          </BreadcrumbItem>
        );
      })}
    </StyledBreadcrumb>
  );
}

const StyledBreadcrumb = styled(Breadcrumb)`
  padding: 10px;
  border-radius: 4px;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const BreadcrumbItem = styled(Breadcrumb.Item)`
  font-family: Inter;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.375rem;
`;

export default CustomBreadcrumb;

```


#### useNavigate


```javascript
  const navigate = useNavigate();

  const { officeId } = useParams();

  const location = useLocation();
```

```diff
const handleAddRecord = () => {
    if (isMobile) {
      setIsShowCreateItemPopup(true);
    } else {
!      navigate(`/inventory/${officeId}/add`);
    }
  };
```
