import React from 'react'

const InputField = (props) => {
  const base_class = 'flex flex-col w-full '
  let error = null
  if (props.error) {
    error = <p className='text-red-500 text-sm'>{props.error}</p>
  }
  return (
    <div className={base_class + props.className}>
      <label className='mb-1 px-1'>{props.label}</label>
      <input
        type={props.type}
        value={props.value}
        onBlur={props.onBlur}
        className='border-2 px-3 p-2 rounded-md focus:outline-none focus:border-sky-400'
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {error}
    </div>
  )
}

export default InputField
