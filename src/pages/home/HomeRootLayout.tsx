import { Outlet} from "react-router-dom";

const HomeRootLayout = () => {


	return (
		<div className="dark:bg-neutral-950 dark:text-white">
			<div className="container mx-auto min-h-screen">
				{" "}
				<Outlet />
			</div>
		</div>
	);
};

export default HomeRootLayout;