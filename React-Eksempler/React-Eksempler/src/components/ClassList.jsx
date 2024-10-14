import { useState } from "react"
import Student from "./Student"

export default function ClassList() {

    const [teacher, setTeacher] = useState("Tobias")

    const [classList, setClassList] = useState([
        { id: 1, name: "John"},
        { id: 2, name: "Jane"},
        { id: 3, name: "Bob"},
        { id: 4, name: "Alice"},
        { id: 5, name: "Charlie"},
    ])

    return (
        <div>

            <Student name={teacher} />

            <h1>Klasse Liste</h1>
            {classList.map(student => (
                <Student key={student.id} name={student.name} />
            ))}
        </div>
    )
}