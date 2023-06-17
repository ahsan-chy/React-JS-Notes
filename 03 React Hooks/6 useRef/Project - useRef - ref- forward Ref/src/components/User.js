import React,{forwardRef} from 'react'

const User = (props, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(User)
