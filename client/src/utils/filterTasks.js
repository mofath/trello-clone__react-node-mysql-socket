export default function filterTasks(tasks) {
    return [
        {
            title: 'Todo',
            id: "todo",
            tasks: tasks.filter((item) =>
                item.status === 'todo'
            )
        },
        {
            title: 'In-Progress',
            id: "in-progress",
            tasks: tasks.filter((item) =>
                item.status === 'in-progress'
            )
        },
        {
            title: 'Testing',
            id: "testing",
            tasks: tasks.filter((item) =>
                item.status === 'testing'
            )
        },
        {
            title: 'Done',
            id: "done",
            tasks: tasks.filter((item) =>
                item.status === 'done'
            )
        },
        {
            title: 'Paid',
            id: "paid",
            tasks: tasks.filter((item) =>
                item.status === 'paid'
            )
        },
    ]
}