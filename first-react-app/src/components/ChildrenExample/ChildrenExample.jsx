const ChildrenExample = ({ children }) => {

    const customStyles = { backgroundColor: 'red' }

    return (
        <section style={customStyles}>
            <h2>Aquí van todos los hijos anidados (sus children!):</h2>
            {children}
        </section>
    )
}

export default ChildrenExample