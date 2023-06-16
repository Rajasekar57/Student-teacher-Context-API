import React, {useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { UsersContext } from '../Components/Subcomponent/ContextComponent';

function TeachersList() {
  let Context = useContext(UsersContext)
 

  return (
    <div
      className="page-container"
      style={{ backgroundColor: '#90E3DB' }}>
        
      <div
        className="card-container"
        style={{
          display: "flex",
          flexWrap: 'wrap',
          justifyContent: "space-between",
          padding: '15%',
        }}
      >
        {Context.teachers.map((teacher, index) => (
          <Card
            border="primary"
            style={{
                backgroundColor:"#BEF53E",
              color:"#1A1D1D",  
              width: '18rem',
              flexBasis: '30%',
              marginBottom: '30px',
            }}
            key={index}
          >
            <Card.Header>
              <h3 className="">{teacher.name}</h3>
            </Card.Header>
            <Card.Body>
              <div className="contents">
                <Card.Text>
                  <b>Email: </b>
                  {teacher.email}
                </Card.Text>
                <Card.Text>
                  <b>Mobile: </b>
                  {teacher.mobile}
                </Card.Text>
                <Card.Text>
                  <b>Expertise: </b>
                  {teacher.specialization}
                </Card.Text>
              </div>
              <div className="m-3">
                <Button variant="primary">
                  <i className="fa-solid fa-pen"></i>
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant="danger"
                  onClick={() => {
                    let newArray = [...Context.teachers];
                    newArray.splice(index, 1);
                    Context.setTeachers(newArray);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TeachersList;
