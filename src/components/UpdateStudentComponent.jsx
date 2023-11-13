import React, { Component } from 'react';
import StudentService from '../services/StudentService';

class UpdateStudentComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
          id: this.props.match.params.id,
          firstName: '',
          lastName: '', 
          emailId:'' 
        }

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateStudent = this.updateStudent.bind(this);
        
    }

    componentDidMount(){
        StudentService.getStudentById(this.state.id).then((res)=>{
            let student = res.data;
            this.setState ({
                firstName:student.firstName,
                lastName:student.lastName,
                emailId:student.emailId

            });
        });
    }
    updateStudent = (e) =>{
        e.preventDefault();
        let student = {firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log(JSON.stringify(student));

        StudentService.updateStudent(student,this.state.id).then((res)=>{
           // this.props.history.push('/students');
        });
    }
    changeFirstNameHandler = (event)=>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler = (event)=>{
        this.setState({lastName: event.target.value});
    }
    changeEmailHandler =  (event)=>{
        this.setState({emailId: event.target.value});
    }
   
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='text-center'>Add Student</h3>
                            <div className='card-body'>
                            <form>
                                <div class="form-group">
                                    <label for="firstName">First Name</label> 
                                    <input type="text" className="form-control" placeholder="First Name" name='firstName'
                                    value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" name='lastName'
                                    value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" className="form-control" placeholder="Email" name='email'
                                    value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                </div>
                                <button type="button" class="btn btn-success" onClick={this.updateStudent}>Save</button>
                                <Link to ="/students">
                                    <button type="button" class="btn btn-danger" style={{marginLeft: "10px"}}>Cancel</button>
                                </Link>
                               
                                </form>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default UpdateStudentComponent;