import { createFileRoute } from '@tanstack/react-router'

type PageParams = {
	page: number
}

async function getTodo(id: string): Promise<{ title: string }> {
	const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
	// throw new Error('Error')
	return data.json()
}

export const Route = createFileRoute('/todo/$todoid')({
	component: TodoItem,
	loader: ({ params }) => getTodo(params.todoid),
	validateSearch: (search: Record<string, unknown>): PageParams => {
		return {
			page: Number(search?.page ?? 1)
		}
	},
	errorComponent: ({ error }) => <div>{error.message}</div>
})

function TodoItem() {
	const { todoid } = Route.useParams()
	const { page } = Route.useSearch()
	const data = Route.useLoaderData()

	return (
		<div>
			<h1>{todoid}</h1>
			<div>Page: {page}</div>
			<div>{data.title}</div>
		</div>
	)
}
