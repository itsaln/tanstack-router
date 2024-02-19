import { createLazyFileRoute, Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/todo/')({
	component: TodoIndex
})

function TodoIndex() {
	return (
		<div>
			<h1>IndexTodo</h1>
			<Link to='/todo/$todoid' params={{ todoid: '1' }}>
				Item 1
			</Link>
		</div>
	)
}
