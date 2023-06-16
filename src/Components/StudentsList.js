import React,{useContext} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { UsersContext } from '../Components/Subcomponent/ContextComponent';

function StudentsList () {

let Context = useContext(UsersContext)

  const navigate = useNavigate();

  const handleEdit = (index) => {
    navigate(`/edit-student/${index}`);
  };

  const handleDelete = (index) => {
    const updatedStudents = [...Context.students];
    updatedStudents.splice(index, 1);
    Context.setStudents(updatedStudents);
  };

  return (
    <>
      <Table bordered style={{ backgroundColor: 'lightblue' , justifyContent:"center",
          }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
          {Context.students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
              <td>{student.course}</td>
              <td>{student.batch}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
                &nbsp;&nbsp;
                <Button variant="danger" onClick={() => handleDelete(index)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="warning" onClick={() => navigate('/addstudent')}>
        Add New student to Management
      </Button>
    </>
  );
}

export default StudentsList;