import React, { Component } from 'react';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';


class ListStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent = this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent(this);
        this.viewStudent = this.viewStudent(this);
    }

    deleteStudent(id){
        StudentService.deleteStudent(id).then((res)=>{
            this.setState({students: this.state.students.filter(student=>student.id !== id)});
        });
    }

    viewStudent(id){
        
    }

    editStudent(id){
         //this.props.history.push('/add-student/${id}');
    }

    addStudent(){
        //this.props.history.push('/add-student');
   }
    
    componentDidMount(){
        StudentService.getStudent().then((res)=>{
            this.setState({students:res.data});
        });
    }


    render() {
        return (
            <div>
                <h2 className='text-center'>Student List</h2>
                <div>
                    <Link to ="/add-student/-1">
                        <button type="button" class="btn btn-primary" onClick={this.addStudent}>ADD</button>
                    </Link>
                    
                </div>
                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>

                            <tr>
                                <th>Student First name</th>
                                <th>Student Last name</th>
                                <th>Student Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.students.map(
                                    student=>
                                    <tr key={student.id}>
                                        <td>{student.firstName}</td>
                                        <td>{student.lastName}</td>
                                        <td>{student.emailId}</td>
                                        <td>
                                            <button type="button" className="btn btn-info" onClick={()=>this.editStudent(student.id)}>Update</button>
                                            <button style={{marginLeft: "10px"}}type="button" className="btn btn-danger" 
                                            onClick={function(){this.deleteStudent(student.id)}.bind(this)}>Delete</button>
                                            <button style={{marginLeft: "10px"}} type="button" className="btn btn-success" onClick={()=>this.viewStudent(student.id)}>View</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        );
    }
}

export default ListStudentComponent;

