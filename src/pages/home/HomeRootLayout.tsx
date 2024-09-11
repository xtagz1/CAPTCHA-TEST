import { Outlet, useLocation } from "react-router-dom";

const HomeRootLayout = () => {
	const location = useLocation();

	const locationIsHome = location.pathname === "/";

	return (
		<div className="dark:bg-neutral-950 dark:text-white">
            {locationIsHome}
			<div className="container mx-auto min-h-screen">
				{" "}
				<Outlet />
			</div>
		</div>
	);
};

export default HomeRootLayout;