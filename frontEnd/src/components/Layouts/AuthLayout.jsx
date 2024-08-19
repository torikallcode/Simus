import React from 'react'
import { HomePage } from '../Sections/HomePage'
import { Navbar } from '../Sections/Navbar'
import { Main } from '../Sections/Main'

export const AuthLayout = () => {

  return (
    <div className=''>
      <Navbar></Navbar>
      <HomePage></HomePage>
      <div className='max-w-7xl mx-auto py-7'>
        <Main></Main>
      </div>
    </div>
  )
}
