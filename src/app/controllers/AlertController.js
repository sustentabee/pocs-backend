const connection = require("../../database/connection");

module.exports = {
    async index(req, res) {
        const alerts = await connection('alerts').select('*').orderBy('id', 'asc')
        return res.json(alerts);
    },

    async store(req, res) {
        const { description } = req.body;
        const [alert] = await connection('alerts').returning('*').insert({ description });
        req.io.emit("alertas", alert);
        return res.json(alert);
    }
};