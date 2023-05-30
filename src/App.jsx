import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TripDetails from './components/tripDetails'
import Chat from './components/chat'
import ChatBox from './components/chatBox'

function App() {
  const [data, setData] = useState({chats:[]})
  const importData = async () =>{
    const Data = await fetch('http://3.111.128.67/assignment/chat?page=0').then(async dat => {
      console.log(dat)
      const jack =  await dat.json()
      setData(jack)
      console.log(jack, "jack")
    })
  }
  console.log(data);
  useEffect(() => {
  importData();  
  }, [0])
  return (
    <div className="App">
        <TripDetails data = {data} />
        <Chat chat = {data} />
        <ChatBox />
    </div>
  )
}

export default App
