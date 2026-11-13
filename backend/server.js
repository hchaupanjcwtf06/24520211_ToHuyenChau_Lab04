    const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); // Để đọc được req.body

// Mock Database đơn giản
const db = {
  messages: { nasa: [], 'esports-tribunal': [], notNasa: [] },
  getMessagesByForum: async (forum) => db.messages[forum] || [],
  addMessage: async (forum, msg) => {
    if (!db.messages[forum]) db.messages[forum] = [];
    db.messages[forum].push(msg);
  }
};

// GET endpoint
app.get('/api/messages/:forum', async (req, res) => {
  // Giả lập mạng chậm 1s để test AbortController
  setTimeout(async () => {
    const messages = await db.getMessagesByForum(req.params.forum);
    res.json(messages);
  }, 1000);
});

// POST endpoint với Payload Validation
app.post('/api/messages/:forum', async (req, res) => {
  if (!req.body.text || !req.body.author) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const newMessage = { id: crypto.randomUUID(), ...req.body, timestamp: new Date() };
  await db.addMessage(req.params.forum, newMessage);
  res.status(201).json(newMessage);
});

app.listen(3001, () => console.log('Backend Express chạy tại cổng 3001'));