import express from "express"
const app = express()
const port = process.env.PORT || 4000

const jokes = [
  {
    "id": 1,
    "setup": "Why don’t skeletons fight each other?",
    "punchline": "They don’t have the guts."
  },
  {
    "id": 2,
    "setup": "What do you call fake spaghetti?",
    "punchline": "An impasta!"
  },
  {
    "id": 3,
    "setup": "Why did the scarecrow win an award?",
    "punchline": "Because he was outstanding in his field."
  },
  {
    "id": 4,
    "setup": "Why can’t your nose be 12 inches long?",
    "punchline": "Because then it would be a foot."
  },
  {
    "id": 5,
    "setup": "What did one ocean say to the other ocean?",
    "punchline": "Nothing, they just waved."
  }
];

app.get('/', (req, res) =>{
    res.send('Hello there')
})

app.get('/api/jokes', (req,res)=>{
    res.send(jokes);
})

app.get('/api/jokes/:id', (req, res) =>{
    const param = parseInt(req.params.id);
    const joke = jokes.find(joke => joke.id === param);
    if (joke) {
    res.json(joke);
  } else {
    res.status(404).json({ error: 'Joke not found' });
  }
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})