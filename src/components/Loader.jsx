import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'><Loader2 className='animate-spin text-red-500' size={48} /></div>
  )
}

export default Loader