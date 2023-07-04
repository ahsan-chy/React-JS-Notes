# React Router Dom

Common Router Dom Hooks/ Functions
- useLocation
- useNavigate 
- useParams


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


```javascript

```