import React from 'react'

function SupportiveDocuComponents({title,des,}) {
  return (
    <div className="flex bg-white shadow-md shadow-slate-700 w-full px-6 py-4 flex-col gap-5">
        <h1 className='font-bold text-xl'>{title}</h1>
        <p className=' text-md text-neutral-600'>{des}</p>

        <div className='flex justify-start gap-3'>
            <button className='w-28 h-10  py-2 bg-white text-center border-[1px] border-neutral-400 rounded-md'>Upload</button>
            <div>
                <p className='text-sm text-neutral-300'>Maximum file size :7 MB</p>
                <p className='text-sm text-neutral-300'>Accepted formats: pdf,png,gpg,jpeg,doc,docx</p>
            </div>
        </div>
    </div>
  )
}

export default SupportiveDocuComponents