import express from 'express';

const car = express();

car.get('/' , (_req, res) => res.status(200).json({ message: 'tamo on!' }));

export default car;