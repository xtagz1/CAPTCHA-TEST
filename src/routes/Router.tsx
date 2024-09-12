import HomeIndex from "@/pages/home/HomeIndex";
import HomeRootLayout from "@/pages/home/HomeRootLayout";
import ValidationPage from "@/pages/validation/ValidationPage";
import { createBrowserRouter } from "react-router-dom";


export const Router = createBrowserRouter([
	{
        path: "/",
		element: (
			<HomeRootLayout />
		),
        children: [
			{ index: true, element: <HomeIndex /> },
			{
				path: "/validation",
				element: <ValidationPage/>,
			},
        ]
    },
    {
		path: "*",
		element: <div>Not Found</div>,
	}

])