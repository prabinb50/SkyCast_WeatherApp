import { IconGithub } from '@/icons'
import { Search, UnitSwitcher } from '../components'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className="w-full flex p-[10px] sticky top-0 bg-bgColor z-10">
			<div className="w-1/10 sm:w-1/4 h-[40px] flex items-center">
				<Link href="/">
					<h1 className="text-white text-[1rem] font-[Tektur] sm:block hidden">
						SkyCast
					</h1>
					<h1 className="text-white text-[1rem] font-[Tektur] sm:hidden">SR</h1>
				</Link>
			</div>
			<div className="w-6/10 sm:w-2/4 flex-center">
				<Search />
			</div>
			<div className="w-3/10 sm:w-1/4 flex items-center justify-end gap-[0.9rem]">
				<UnitSwitcher />
				<a target="_blank" href="https://github.com/prabinb50">
					<IconGithub className="text-white text-[30px]" />
				</a>
			</div>
		</nav>
	)
}

export default Navbar
