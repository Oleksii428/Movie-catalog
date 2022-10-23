import "./App.scss";
import {Navigate, Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";

import {MainLayout} from "./layouts";
import {MovieDetailsPage, MoviesListPage} from "./pages";
import {MoviesList} from "./components";


export const ThemeContext = createContext(null);

function App() {
	const localTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(localTheme);

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("theme", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("theme", "light");
		}
	};

	return (
		<ThemeContext.Provider value={{theme, toggleTheme}}>
			<div id={theme}>
				<Routes>
					<Route path={"/"} element={<MainLayout/>}>
						<Route index element={<Navigate to={"moviesListPage"}/>}/>
						<Route path={"moviesListPage"} element={<MoviesListPage/>}>
							<Route index element={<Navigate to={"1"}/>}/>
							<Route path={":page"} element={<MoviesList/>}/>
							<Route path={":page/:genre/:search"} element={<MoviesList/>}/>
							<Route path={":page/:genre"} element={<MoviesList/>}/>
						</Route>
						<Route path={"movieDetailsPage/:id"} element={<MovieDetailsPage/>}/>
					</Route>
				</Routes>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
