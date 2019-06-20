import React from 'react';
 class Form extends React.Component{
    nameRef = React.createRef();
    ageRef = React.createRef();
    emailRef = React.createRef();

    AddFriend = () =>{
        if(this.nameRef.currentValue ==='' || this.emailRef.currentValue === ''){}
        else{
            this.props.save ({
                name: this.nameRef.currentValue , 
                age: this.ageRef.currentValue , 
                email: this.emailRef.currentValue
            })
            
        }
    }

     getFriend = async (id) =>{
        await this.props.get()
        const newFriend = this.props.data.find(friend => friend.id === Number(id))
        console.log(newFriend)
        this.setState({
            name: newFriend.name,
            age: newFriend.age,
            email:newFriend.email,
            value: "Update",
            target: id,
        })
        }
        componentDidMount(){
            if(this.props.location.pathname === `/${this.props.match.params.id}/update`) {
                this.getFriend(this.props.match.params.id)
            } 
        }
   render(){
    return (
        <div>
        <h1>{this.state.value}</h1>
        <form onSubmit ={(e) =>this.props.submit(e , this.state.target)}>
            <input type='text'  onChange={(e) =>this.props.inputValue(e.target.value, 'name')} placeholder={this.state.name}/>
            <input type='text' onChange={(e)=>this.props.inputValue(e.target.value, 'age')} placeholder={this.state.age} />
            <input type='email' onChange={(e)=>this.props.inputValue(e.target.value, 'email')} placeholder={this.state.email}/>
            <input type='submit' value={this.state.value} />
        </form>
        </div>
    )
}
 }
export default Form