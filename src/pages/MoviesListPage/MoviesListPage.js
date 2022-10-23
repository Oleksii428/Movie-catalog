import {Outlet} from "react-router-dom";

import {GenresFilterList, Pagination, Search} from "../../components";

export function MoviesListPage() {
	return (
		<div>
			<GenresFilterList/>
			<Search/>
			<Outlet/>
			<Pagination/>
		</div>
	);
}