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
