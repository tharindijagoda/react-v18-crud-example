import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class ViewStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
           id:this.match.params.id,
           student:{}
        }
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then((res)=>{
            this.setState({student:res.data});
        });
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>View  Student Details</h3>
                    <div className='row'>
                        <label >First Name:</label>
                        <div>{student.firstName}</div>
                    </div>
                    <div className='row'>
                        <label >Last Name:</label>
                        <div>{student.lastName}</div>
                    </div>
                    <div className='row'>
                        <label >Email:</label>
                        <div>{student.email}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewStudentComponent;