/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { MdHome } from 'react-icons/md'
import { FiLogIn } from 'react-icons/fi'
import { GoProject } from 'react-icons/go'
import { AiOutlineSchedule } from 'react-icons/ai'
import { FaDatabase } from 'react-icons/fa'

export default {
	home: { to: '/home', label: 'Home', icon: <MdHome size={25} /> },
	login: { to: '/login', label: 'Login', icon: <FiLogIn size={25} /> },
	projects: { to: '/projects', label: 'Projects', icon: <GoProject size={20} /> },
	schedules: { to: '/schedules', label: 'Schedules', icon: <AiOutlineSchedule size={25} /> },
	masterData: { to: '/master-data', label: 'Master Data', icon: <FaDatabase size={23} /> },
}
