import './App.css'
import Button from './Button/Button'
import ChildrenExample from './ChildrenExample/ChildrenExample'
import MainTitle from './MainTitle/MainTitle'
import Navbar from './Navbar/Navbar'
import StudentCard from './StudentCard/StudentCard'

import ReactPlayer from 'react-player'

const App = () => {

  return (
    <div className="App">

      <Navbar />

      <MainTitle text={'Listado principal de alumnos/as'} />

      <Button text={'Ver todos/as'} link={'/alumnos'} />
      <Button text={'Contactar'} link={'/contacto'} />

      <StudentCard
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1712.jpg'}
        studentInfo={{ name: 'Popino Alvarez', age: 33, bootcamp: 'Web Dev', date: 'Oct 2023', city: 'Madrid' }}
      />

      <StudentCard
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1723.jpg'}
        studentInfo={{ name: 'Ana Whatever', age: 11, bootcamp: 'UX/UI', date: 'Oct 2024', city: 'Madrid' }}
        highlighted={true}
      />

      <StudentCard
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1909.jpg'}
        studentInfo={{ name: 'Sergio Whatever', age: 22, bootcamp: 'Data', date: 'Oct 2025', city: 'BCN' }}
      />

      <StudentCard
        avatar={'https://multiapi-app.fly.dev/img/people/image-lorem-face-1158.jpg'}
        studentInfo={{ name: 'Sofía Doe', age: 44, bootcamp: 'Web Dev', date: 'Oct 2022', city: 'Gijón' }}
      />

      <hr />

      <MainTitle text={'Este es un ejemplo con children que están anidados'} />

      <ChildrenExample>
        <p>Yo seré uno de sus children, porque estoy anidado</p>
        <p>Yo seré uno de sus children, porque estoy anidado</p>
        <p>Yo seré uno de sus children, porque estoy anidado</p>
        <p>Yo seré uno de sus children, porque estoy anidado</p>
      </ChildrenExample>

      <hr />

      <MainTitle text={'...y ahora Karina canta para ti'} />

      <ReactPlayer
        url={'https://www.youtube.com/watch?v=K52CuUwrypQ'}
        muted
        controls
      />

    </div>
  )
}

export default App