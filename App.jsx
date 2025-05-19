
import './App.css'
import ProfileCards from './components/ProfileCards'
import profileimges from "./assets/profile.jpg"
import profile2 from "./assets/profile2.jpg"
import Button from "./components/Button.jsx"

function App() {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      <ProfileCards profileimges={profileimges} name={"Adinath gaware"} role={"Software Engineer(Front-end)"} />
      <ProfileCards profileimges={profile2} name={"ankit kumar"} role={"Blockchain Developer"} />
      <ProfileCards profileimges={profileimges} name={"rahul punewala"} role={"Web3 Developer"} />
      <ProfileCards profileimges={profileimges} name={"rahul punewala"} role={"Web3 Developer"} />
      <Button title={"Submit"} style={{ backgroundColor: 'green', color: 'white' }} />
    </div>
  )
}

export default App
