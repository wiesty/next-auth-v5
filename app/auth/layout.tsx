import React from 'react'

const layout = ({
children
}:{ children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center  bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-slate-900 to-neutral-950'>
        {children}
    </div>
  )
}

export default layout