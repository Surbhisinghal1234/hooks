import React, { memo, useRef } from 'react'

const MemoCount = () => {
    const renderCount = useRef(0)
    console.log(renderCount,"renderCount")
  return (
    <div className='text-white'>
      <p>rendered</p>
      <span>{renderCount.current++}</span>
    </div>
  )
}

// export default memo(MemoCount)
export default React.memo(MemoCount)

