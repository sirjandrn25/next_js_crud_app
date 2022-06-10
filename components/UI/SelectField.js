import React from 'react'

const SelectField = (props) => {
  let error = null
  if (props.error) {
    error = <p className='text-red-500 text-sm'>{props.error}</p>
  }
  return (
    <div className='flex flex-col'>
      <label className='mb-1'>{props.label}</label>
      <select
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        className='border-2 px-3 p-2 rounded-md focus:outline-none focus:border-sky-400'>
        <option value=''>{props.option_title}</option>
        {props.options.map((optionVal) => {
          return (
            <option value={optionVal} key={optionVal}>
              {optionVal}
            </option>
          )
        })}
      </select>
      {error}
    </div>
  )
}

export default SelectField
