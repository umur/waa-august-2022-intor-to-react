

export default function Student(props) {
  const {name, cgpa} = props.student;

  return (
    <div>
      <div>
        Student Name: {name}
        <br/>
        CGPA: {cgpa}
      </div>
      <br/>
    </div>

  );
}
