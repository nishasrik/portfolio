import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import CVButton from './Navbar/CVButton'
import { MailLock } from '@mui/icons-material'

export default function Footer() {
  return (
    <div className="mt-3.5 flex justify-between rounded-t-lg bg-[#f1f0ee] p-5 px-5 text-left text-gray-600 dark:bg-[#edeeef]">
      <div>
        <p className="text-xs text-gray-500">© Made by Nishasri in 2024</p>

        <a href="mailto:knishasri5@gmail.com" className="mt-2 text-xs text-gray-500 hover:text-indigo-500">
          knishasri5@gmail.com
        </a>
      </div>

      https://github.com/nishasrik
      <div className="flex gap-2 text-right dark:text-[#e0eaf2]">
        <a className="tooltip tooltip-bottom" data-tip="Linkedin.com/Nisha" target="_blank" href="https://www.linkedin.com/in/nisha-sri-kasirajan-8148b6257/">
          <BsLinkedin className="tooltip cursor-pointer  rounded-md text-[1.8rem] hover:fill-[#0069b9]   dark:hover:fill-[#00adb5]" fill="black" />
        </a>
        <a className="tooltip tooltip-bottom" data-tip="github.com/Nishasri" target="_blank" href="https://github.com/nishasrik">
          <BsGithub className=" cursor-pointer text-[1.8rem]  hover:fill-[#0069b9]  dark:hover:fill-[#00adb5]" fill="black" data-tip="hello" />
        </a>
        <CVButton />
      </div>
    </div>
  )
}
