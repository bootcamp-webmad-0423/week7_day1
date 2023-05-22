const StudentInfo = ({ studentData }) => {

    const { name, age, city, bootcamp, date } = studentData

    return (
        <>
            <p>{name}, {age} años, {city}</p>
            <p>Bootcamp {bootcamp} ({date})</p>
        </>
    )
}

export default StudentInfo