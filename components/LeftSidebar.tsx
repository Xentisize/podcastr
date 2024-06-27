import Image from 'next/image';
import Link from 'next/link';
import { sidebarLinks } from '@/constants';

const LeftSidebar = () => {
	return (
		<section className="left_sidebar">
			<nav className="flex flex-col gap-6">
				<Link href="/" className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
					<Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
					<h1 className="text-24 font-extrabold text-white max-lg:hidden">Podcastr</h1>
				</Link>
			</nav>

			{sidebarLinks.map((item) => {
				return (
					<Link key={item.route} href={item.route}>
						{item.label}
					</Link>
				);
			})}
		</section>
	);
};

export default LeftSidebar;
