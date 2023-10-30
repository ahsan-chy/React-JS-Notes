# Problems Solutions

Table of Content

- State Prop
-
-


#### 

#### Use State Related Questions

- Toggle the State -

First Click on button state change(true), again click on button it will reverse(false) to the orignal state

```diff
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
!    setIsToggled((prevIsToggled) => !prevIsToggled);
  };

```

- Toggle Menu - Toggle Specific Menu

```diff
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    if (openIndexes.includes(index)) {
!      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };


  {FaqList?.map((list, index) => (
    <div
      key={index}>
      <div>
        <div>
          <h2>{list.question}</h2>
        </div>
        <div
          className={`${openIndexes.includes(index) ? "rotate-90" : "rotate-0"}`}
          onClick={() => toggleAccordion(index)}
        >
          <ArrowButton />
        </div>
      </div>
      <div className={`my-3 ${!openIndexes.includes(index) ? "hidden" : ""}`}>
        <p className="text-[17px] sm:text-[19px] mt-3">{list.answer} </p>
      </div>
    </div>
  ))}

```

- Here is scenario Where i am mapping comments data. There is option where user will click on specific comment more option and delete button popover(Button) appear. And While clicking on specific comment delete button it will delete that specific button .

![delete button popover](https://github.com/ahsan-chy/Better-My-City/assets/85479513/4a66bfb7-648f-4ffb-8d8f-ae25cba48520)

```diff

  const [activeDeleteKey, setActiveDeleteKey] = useState(null);


  const toggleDeletePopover = (itemKey) => {
    if (activeDeleteKey === itemKey) {
      setActiveDeleteKey(null);
    } else {
!      setActiveDeleteKey(itemKey);
    }
  };


     {comments?.map((item) => (
            <CommentCardWrapper key={item?.id || item?.createdAt}>
              <CommentHeadWrapper>
                <CommentIconWrapper>
                  <ImageAvatar src={item?.user?.photoURL} />
                </CommentIconWrapper>
                <CommentSenderName>{item?.user?.displayName}</CommentSenderName>
                <CommentTime>{uploadedTime(item?.createdAt)}</CommentTime>
              </CommentHeadWrapper>
              <CommentDataWrapper>
                <CommentText>{item?.message}</CommentText>
              </CommentDataWrapper>
              <CommentBottomSection>
                <AlertBtn>Create alert</AlertBtn>
                <CommentMenu>
                  {console.log('delete nitem key', activeDeleteKey)}
                  <HiPencilSquare />
                  <MoreMenuWrapper>
!                    <BsThreeDots onClick={() => toggleDeletePopover(item.id)} />
!                    {activeDeleteKey === item.id && (
                      <DeletePopover>
                        {' '}
                        <RiDeleteBin5Fill />
                        <p>Delete</p>
                      </DeletePopover>
                    )}
                  </MoreMenuWrapper>
                </CommentMenu>
              </CommentBottomSection>
            </CommentCardWrapper>
          ))}

```

#### Destructuring Questions

- Modify Existing data

```diff
const initialContactData = useMemo(() => {
    return {
      providerName: initialContact?.providerName || '',
      category: initialContact?.category || '',
      name: initialContact?.name || '',
      role: initialContact?.role || '',
      email: initialContact?.email || '',
      genericEmail: initialContact?.genericEmail || '',
      contactNumber: initialContact?.contactNumber || {
        phoneNumber: null,
        countryCode: null,
      },
      genericContactNumber: initialContact?.genericContactNumber || {
        phoneNumber: null,
        countryCode: null,
      },
      paymentMethod: initialContact?.paymentMethod || '',
      hourlyRate: initialContact?.hourlyRate || '',
      estimatedHour: initialContact?.estimatedHour || '',
    };
  }, [initialContact]);


 const combineNumber = (obj) => {
    const { countryCode, phoneNumber } = obj;
    return `+${countryCode}${phoneNumber}`;
  };


!    const newInput = { ...inputData };
    newInput.contactNumber = combineNumber(newInput.contactNumber);
    newInput.genericContactNumber = combineNumber(
      newInput.genericContactNumber
    );



    const payload = {
      ...newInput,
      updatedBy: {
        id: user.uid,
        name: user.displayName,
      },
      updatedAt: serverTimestamp(),
    };
```

- insert new data with existing Array

```diff
const handleUpdateComment = async (editItem, index) => {
!  const updatedComments = [...comments];

!  updatedComments[index].message = editItem.message.trim();

!  setComments(updatedComments);
};
```

- Splice / Remove the selected comment data from local state **comment**. Base on index

```diff
  const handleRemoveComment = async (item, index) => {

     const temp = comments;
!    temp.splice(index, 1);
!    setComments(temp);

  };
```

#### Delete Methods

- Slice/Splice Method to delete

```javascript
const handleDeleteComment = (indexToDelete) => {
  const updatedComments = [...comments];
  updatedComments.splice(indexToDelete, 1);

  setComments(updatedComments);
};
```

- Filter Method to delete

```javascript
const handleDeleteComment = (commentId) => {
  const updatedComments = comments.filter((comment) => comment.id !== commentId);

  setComments(updatedComments);
};
```
