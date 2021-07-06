export default function filterTasks(tasks) {
    return [
        {
            title: 'Todo',
            id: "list-1",
            cards: tasks.filter((item) =>
                item.status === 'todo'
            )
        },
        {
            title: 'In-Progress',
            id: "list-2",
            cards: tasks.filter((item) =>
                item.status === 'in-progress'
            )
        },
        {
            title: 'Testing',
            id: "list-3",
            cards: tasks.filter((item) =>
                item.status === 'testing'
            )
        },
        {
            title: 'Done',
            id: "list-4",
            cards: tasks.filter((item) =>
                item.status === 'done'
            )
        },
        {
            title: 'Paid',
            id: "list-5",
            cards: tasks.filter((item) =>
                item.status === 'paid'
            )
        },
    ]
}