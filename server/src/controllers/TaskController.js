const { TaskService } = require('../services');



async function create(req, res, next) {
    try {
        await TaskService.create(req.body);

        res.status(201).json({
            success: true,
        });

    } catch (err) {
        throw new Error(err.message);
    }
}

async function getAll(req, res, next) {
    try {
        const tasks = await TaskService.getAll();

        res.status(201).json({
            success: true,
            tasks,
        });

    } catch (err) {
        throw new Error(err);
    }
};


async function updateStatus(req, res, next) {
    try {
        const user = await TaskService.updateTaskStatus(req.body.id, req.body.status);;

        return res.status(200).json({
            success: true,
        });

    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    create,
    getAll,
    updateStatus
};
