import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/Card'
import Card from './components/Card'
import Form from './components/Form'




function App() {
  const [count, setCount] = useState(0)

  const [cities, setCites] = useState([
    {
      id: 0,
      title: "tokio",
      imgUrl: "https://plus.unsplash.com/premium_photo-1675148247638-fb5c8db249a2?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id: 1,
      title: "Paris",
      imgUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },
    {
      id: 2,
      title: "Rome",
      imgUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: false
    },
    {
      id: 3,
      title: "Siracusa",
      imgUrl: "https://images.unsplash.com/photo-1559397052-ce686599cf78?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      isVisited: true
    },

  ]);

  const addCity = (city) => {
    setCites([...cities, city]);
  };

  return (
    <>
      <div>
        <Form addCity={addCity}></Form>
      </div>
      <div className='grid grid-cols-4 gap-5'>
        {cities.map((city) => (
          <Card
            key = {city.id}
            title = {city.title}
            imgUrl = {city.imgUrl}
            isVisited={city.isVisited}
          />

        ))}
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     

    </>
  )
}

export default App
