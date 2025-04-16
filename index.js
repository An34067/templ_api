const { createClient } = require ('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://pfqqofytfrwcvclywfrc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmcXFvZnl0ZnJ3Y3ZjbHl3ZnJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ3ODEwMzYsImV4cCI6MjA2MDM1NzAzNn0.gKpsv9_FWdM89-6SkwoL1fTgBxVUhiDmRc2x6QxInSs')


const express = require("express")
const app = express()
const port = 3000

app.get('/students',  async (req, res) => {

  const { data, error } = await supabase
  .from('students')
  .select()

  res.json(data)
})

app.post('/students', (req, res) => {
  res.send("Добавление студентов")
})

app.delete('/students/:id', async (req, res) => {
  const response = await supabase
  .from('students')
  .delete()
  .eq('id', req.params.id)
res.json('Студент с id =' + req.params.id + 'удален!')

})

app.put('/students', (req, res) => {
  res.send("Изменение студентов")
})






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})