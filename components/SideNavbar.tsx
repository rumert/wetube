import Link from 'next/link';
import React from 'react'
import { FaHouse, FaList, FaYoutube } from "react-icons/fa6";

export default function SideNavbar() {
    return(
    <ul className="menu bg-base-200 rounded-box w-fit fixed top-32 left-6">
      <li>
        <Link href='/' className="tooltip tooltip-right" data-tip="Home">
          <FaHouse className='h-5 w-5' />
        </Link>
      </li>
      <li>
        <Link href='/subscriptions' className="tooltip tooltip-right" data-tip="Subs">
          <FaYoutube className='h-5 w-5' />
        </Link>
      </li>
      <li>
        <Link href='/lists' className="tooltip tooltip-right" data-tip="Lists">
          <FaList className='h-5 w-5' />
        </Link>
      </li>
    </ul>
    )
}
