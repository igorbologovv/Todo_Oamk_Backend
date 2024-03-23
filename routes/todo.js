const express = require('express');
const router = express.Router();
const db = require('../db');

// Define routes
router.get("/", async (req, res) => {
    try {
        const result = await db.query('SELECT * from task');
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post("/new", async (req, res) => {
    const { description } = req.body;
    try {
        const result = await db.query('INSERT INTO task (description) VALUES ($1) RETURNING id', [description]);
        res.status(200).json({ id: result[0].id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete("/delete/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        await db.query('DELETE FROM task WHERE id = $1', [id]);
        res.status(200).json({ id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Export the router
module.exports = router;
