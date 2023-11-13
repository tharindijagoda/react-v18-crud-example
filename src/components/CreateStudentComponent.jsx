import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StudentService from '../services/StudentService';
import { useNavigate } from 'react-router-dom';

class CreateStudentComponent extends Component {
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
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
        
    }
    componentDidMount(){
        if(this.state.id == -1){
            return
        }else{
            StudentService.getStudentById(this.state.id).then((res)=>{
                let student = res.data;
                this.setState ({
                    firstName:student.firstName,
                    lastName:student.lastName,
                    emailId:student.emailId
    
                });
            });
        }
        
    }

    saveOrUpdateStudent = (e) =>{
        e.preventDefault();
        let student = {firstName:this.state.firstName,lastName:this.state.lastName,emailId:this.state.emailId};
        console.log(JSON.stringify(student));

        if(this.state.id == -1){
            StudentService.createStudent(student).then(res=>{
                //this.props.history.push('/student');
            });
        }else{
            StudentService.updateStudent(student,this.state.id).then((res)=>{
                // this.props.history.push('/students');
             }); 
        }

        
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
   
    getTitle(){
        if(this.state.id == -1){
            return <h3 className='text-center'>Add Student</h3>
        }else{
            return <h3 className='text-center'>Update Student</h3>
        }
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            {
                                this.getTitle()
                            }
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
                                <button type="button" class="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
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

export default CreateStudentComponent;