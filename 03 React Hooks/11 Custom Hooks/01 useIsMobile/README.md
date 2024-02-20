

#### useIsMobile Hook

```javascript
import { useEffect, useState } from 'react';

export const MOBILE_BREAKDOWN = 768;

const useIsMobile = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width <= MOBILE_BREAKDOWN;
};

export default useIsMobile;

```

#### How to use Custom Hook

Import Hook

```javascript
import { useIsMobile } from "@/hooks";

const isMobile = useIsMobile();
```

1. 
```javascript
{
  isMobile &&(
    <button type="button" onClick={onToggleMinimize}>
      <img src={closeIcon} alt="" />
    </button>
  );
}
```
2. 
```javascript
const TopBar = isMobile ? MNavBar : TopSection;

const NavOptions = isMobile ? MNavOptions : RightIcons;
```

3. 
```javascript
if (isMobile) {
  return (
    <MobileRoot>
      <MStyledSearchInput
        placeholder={`${t("inventory.search-for-items")}...`}
        handleSearch={handleSearch}
      />
    </MobileRoot>
  );
}
```


### Status Hook


A beautiful custom hook which gives the status of the application that the application is visible or not

For example if the user minimize the app or change the tab to another tab it gives false means the user is not currently viewing the app and when the user opens the tab again it returns true. 

This is very useful in many cases some of the use cases are:

1 - If you need to send some analytics data to backend so the good time could be when the user is away.

2 - A site has an image carousel that shouldn't advance to the next slide unless the user is viewing the page

3 - An application showing a dashboard of information doesn't want to poll the server for updates when the page isn't visible meaning stop polling if the user is not viewing the app.

![status Hook](https://github.com/ahsan-chy/Shortcutkeys-Cheatsheets/assets/85479513/38be000e-9b77-4ea3-bc5c-d033f6effa32)
