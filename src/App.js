import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data)
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today.</h3>
      <List people={people}/>
      <button onClick={() => setPeople([])}>Clear All</button>
      <p style={{marginTop: '5px'}}>Did it only for fun and improve my react skills</p>
      
    </section>
  </main>;
}

export default App;