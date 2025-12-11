import React from 'react'
import { Outlet } from 'react-router'
import {Navbar} from "../Components/Navbar"
import {Footer} from "../Components/Footer"
export const Layout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
