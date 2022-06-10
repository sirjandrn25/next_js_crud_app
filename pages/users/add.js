import React from 'react'
import InputField from '../../components/UI/InputField'
import SelectField from '../../components/UI/SelectField'
import Button from '../../components/UI/Button'
import Link from 'next/link'
import useInput from '../../hooks/useInput'

const isEmpty = (value) => (value ? false : 'this field may not be empty')
const isEmail = (value) => {
  let emptyCheck = isEmpty(value)
  return emptyCheck ? emptyCheck : !value.includes('@') && 'this field may need @ '
}

const isPassword = (value) => {
  let emptyCheck = isEmpty(value)
  return emptyCheck ? emptyCheck : value.length < 8 && 'at least 8 charecters required!!'
}

const titleOptions = ['Mr', 'Mrs', 'Miss', 'Misses']
const rollOptions = ['User', 'Admin']

const AddUser = () => {
  const {
    inputState: fNameState,
    inputChangeHandler: fNameChangeHandler,
    error: fNameError,
    inputBlurHandler: fNameBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: titleState,
    inputChangeHandler: titleChangeHandler,
    error: titleError,
    inputBlurHandler: titleBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: lNameState,
    inputChangeHandler: lNameChangeHandler,
    error: lNameError,
    inputBlurHandler: lNameBlurHandler,
  } = useInput(isEmpty)
  const {
    inputState: emailState,
    inputChangeHandler: emailChangeHandler,
    error: emailError,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail)

  const {
    inputState: rollState,
    inputChangeHandler: rollChangeHandler,
    error: rollError,
    inputBlurHandler: rollBlurHandler,
  } = useInput(isEmpty)

  const {
    inputState: passwordState,
    inputChangeHandler: passwordChangeHandler,
    error: passwordError,
    inputBlurHandler: passwordBlurHandler,
  } = useInput(isPassword)

  const isConfirmPassword = (value) => {
    let emptyCheck = isEmpty(value)
    return emptyCheck ? emptyCheck : value !== passwordState.value && 'both password is not matched'
  }
  const {
    inputState: confirmPasswordState,
    inputChangeHandler: confirmPasswordChangeHandler,
    error: confirmPasswordError,
    inputBlurHandler: confirmPasswordBlurHandler,
  } = useInput(isConfirmPassword)

  const isValidSubmit =
    fNameState.inputValid &&
    lNameState.inputValid &&
    emailState.inputValid &&
    titleState.inputValid &&
    rollState.inputValid &&
    passwordState.inputValid &&
    confirmPasswordState.inputValid
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(fNameState.inputValid)
    // console.log(lNameState.inputValid)
    console.log(titleState.inputValid)
    console.log(titleState.value)

    // titleState.inputValid &&
    // rollState.inputValid &&
    // passwordState.inputValid &&
    // confirmPasswordState.inputValid
    console.log(isValidSubmit)
    if (!isValidSubmit) {
      emailBlurHandler()
      passwordBlurHandler()
      fNameBlurHandler()
      lNameBlurHandler()
      confirmPasswordBlurHandler()
      rollBlurHandler()
      titleBlurHandler()
      return
    }
    console.log('successfully submited')
  }

  const clearAllField = () => {}

  return (
    <div className='w-[1000px] flex flex-col p-5 border-2'>
      <h1 className='text-3xl font-bold p-3 border-b-4'>Add New User</h1>
      <form action='' onSubmit={submitHandler} className='w-full'>
        <div className='grid grid-cols-5 w-full items-center gap-2'>
          <SelectField
            value={titleState.value}
            error={titleError}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
            options={titleOptions}
            option_title='select user title'
            label={'Title'}
            className='my-3 col-span-1'
          />
          <InputField
            value={fNameState.value}
            error={fNameError}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            type='text'
            label='First Name'
            placeholder='enter first name'
            className='col-span-2 my-3'
          />
          <InputField
            value={lNameState.value}
            error={lNameError}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            type='text'
            label='Last Name'
            placeholder='enter last name'
            className='col-span-2 my-3'
          />
        </div>
        <div className='grid grid-cols-3 w-full items-center gap-2'>
          <InputField
            value={emailState.value}
            error={emailError}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            type='email'
            label='Email Address'
            placeholder='enter email address'
            className=' my-3 col-span-2'
          />
          <SelectField
            value={rollState.value}
            onChange={rollChangeHandler}
            onBlur={rollBlurHandler}
            error={rollError}
            options={rollOptions}
            label={'Roll'}
            option_title='select roll'
            className='my-3 col-span-1'
          />
        </div>
        <div className='grid grid-cols-2 w-full items-center gap-2'>
          <InputField
            value={passwordState.value}
            error={passwordError}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            type='password'
            placeholder='enter new password'
            label='Password'
            className=' my-3 '
          />
          <InputField
            value={confirmPasswordState.value}
            error={confirmPasswordError}
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            type='password'
            placeholder='enter confirm password'
            label='Confirm Password'
            className=' my-3 '
          />
        </div>
        <div className='my-3 flex flex-row items-center'>
          <Button className='bg-blue-500 hover:bg-blue-700 mr-3'>Save</Button>
          <Button className='bg-gray-500 hover:bg-gray-700 mr-3'>Reset</Button>
          <Link href={'/users'}>
            <a className='text-blue-500 hover:border-b-2 hover:border-b-blue-500 font-medium'>Cancel</a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddUser
