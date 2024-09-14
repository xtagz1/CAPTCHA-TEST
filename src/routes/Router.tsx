import HomeIndex from "@/pages/home/HomeIndex";
import HomeRootLayout from "@/pages/home/HomeRootLayout";
import ValidationError from "@/pages/error/ValidationError";
import ValidationPage from "@/pages/validation/ValidationPage";
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/pages/not-found/NotFound";
import ValidationSucess from "@/pages/validation-success/ValidationSucess";


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
		path: "/pass",
		element: (
			<ValidationSucess/>
		),
	},
	{
		path: "/error",
		element: (
			<ValidationError />
		),
	},
    {
		path: "*",
		element: (
			<NotFound/>
		),
	}
])