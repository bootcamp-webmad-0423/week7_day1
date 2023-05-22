import StudentInfo from '../StudentInfo/StudentInfo'
import './StudentCard.css'

const StudentCard = ({ avatar, studentInfo, highlighted }) => {

    const specialClass = highlighted ? 'green' : 'grey'

    console.log('SOY UNA FUNCION, NO MUERDO, ME EJECUTO CON NORMALIDAD. EL ALUMNO', studentInfo.name, 'TENDRÁ LA CLASE', specialClass)

    return (
        <article className={`Student-card ${specialClass}`}>

            <img src={avatar} alt="alumno/a" />

            <StudentInfo studentData={studentInfo} />

        </article>
    )
}

export default StudentCard