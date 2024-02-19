import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
	component: () => (
		<>
			<div>
				<Link to='/'>Главная</Link>
				<Link to='/about'>О нас</Link>
				<Link to='/todo'>Todo</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	)
})
