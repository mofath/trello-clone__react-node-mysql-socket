const { TaskService } = require('../services');
const { Error500 } = require('../exceptions');

async function create(req, res, next) {
    try {
        const task = await TaskService.create(req.body);
        
        res.status(201).json({
            success: true,
            task
        });

    } catch (error) {
        next(new Error500(error.message))
    }
}

async function getAll(req, res, next) {
    try {
        const tasks = await TaskService.getAll();

        res.status(201).json({
            success: true,
            tasks,
        });

    } catch (error) {
        next(new Error500(error.message))
    }
};


async function updateStatus(req, res, next) {
    try {
        const user = await TaskService.updateTaskStatus(req.body.id, req.body.status);;

        return res.status(200).json({
            success: true,
        });

    } catch (error) {
        next(new Error500(error.message))
    }
};

module.exports = {
    create,
    getAll,
    updateStatus
};
