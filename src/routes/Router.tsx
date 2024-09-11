import HomeIndex from "@/pages/home/HomeIndex";
import HomeRootLayout from "@/pages/home/HomeRootLayout";
import { createBrowserRouter } from "react-router-dom";


export const Router = createBrowserRouter([
	{
        path: "/",

		element: (
			<HomeRootLayout />
		),
        children: [
			{ index: true, element: <HomeIndex /> },
        ]
    },
    {
		path: "*",
		element: <div>Not Found</div>,
	}

])