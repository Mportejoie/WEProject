const express = require('express');
const cors = require('cors');
const sequelize = require('./database');
const Client = require('./model/client.model');
const User = require('./model/user.model');
const authRoutes = require('./AuthRoute');
const authenticateToken = require('./authenticateToken');

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization'
}));
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync({ alter: true }).then(async () => {
  console.log('Database synchronized');

  app.get('/api/clients', authenticateToken, async (req, res) => {
    const clients = await Client.findAll({ where: { userId: req.user.userId } });
    res.json(clients);
  });

  app.post('/api/clients', authenticateToken, async (req, res) => {
    try {
      const newClient = await Client.create({ ...req.body, userId: req.user.userId });
      res.status(201).json(newClient);
    } catch (error) {
      console.error('Error creating client:', error);
      if (error.name === 'SequelizeUniqueConstraintError') {
        res.status(409).json({ message: 'Client already exists' });
      } else {
        res.status(500).json({ message: 'Error creating client' });
      }
    }
  });

  app.delete('/api/clients', authenticateToken, async (req, res) => {
    const { firstName, lastName, address } = req.body;
    await Client.destroy({
      where: {
        firstName,
        lastName,
        address,
        userId: req.user.userId
      }
    });
    res.status(204).send();
  });

  app.put('/api/clients', authenticateToken, async (req, res) => {
    const updatedClient = req.body;
    const [updated] = await Client.update(updatedClient, {
      where: {
        firstName: updatedClient.firstName,
        lastName: updatedClient.lastName,
        address: updatedClient.address,
        userId: req.user.userId
      }
    });
    if (updated) {
      const client = await Client.findOne({
        where: {
          firstName: updatedClient.firstName,
          lastName: updatedClient.lastName,
          address: updatedClient.address,
          userId: req.user.userId
        }
      });
      res.status(200).json(client);
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  });

  app.options('*', cors({
    origin: 'http://localhost:4200',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Authorization'
  }));

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});
