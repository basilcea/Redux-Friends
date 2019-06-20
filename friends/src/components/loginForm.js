import React from "react";
import { login } from "./state/actions";
import styled from "styled-components";
import { connect } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
const FormContainer = styled.div`
  width: 80%;
  border: 1px solid green;
`;
export class LoginForm extends React.Component {
  nameRef = React.createRef();
  passwordRef = React.createRef();
   
  Login = () => {
      let username = this.nameRef.current.value;
      let password = this.passwordRef.current.value;
    if (
      this.nameRef.current.value === "" || this.passwordRef.current.value === " "
    ) {
    } else {
        console.log(this.props)
      this.props.login(username, password);
      username = '';
      password ='';
    }
  };

  render() {
    return (
      <FormContainer>
        <h1>Welcome to Friendz</h1>
        <input ref={this.nameRef} type="text" placeholder="Name" />
        <input ref={this.passwordRef} type="password" placeholder="*******" />
        <button onClick={this.Login}>
          <FaPlusCircle />
        </button>
      </FormContainer>
    );
  }
}

export default connect(
  state => state,
  { login }
)(LoginForm);
