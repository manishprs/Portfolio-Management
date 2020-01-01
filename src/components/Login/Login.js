import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';

import PMInput from './PMInput';
import PMIcon from '../../assets/Icon.svg';
import * as actionCreators from '../../store/actions/actions';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loginElements: {
                username: {
                    config: {
                        type: 'text',
                        placeholder: 'Username',
                        icon: 'user',
                    },
                    valid: false,
                    validation: {
                        required: true,
                        includeCharacters: []
                    },
                    value: '',
                    error: 'Invalid Username',
                    touched: false,
                },
                password: {
                    config: {
                        type: 'password',
                        placeholder: 'Password',
                        icon: 'key',
                    },
                    valid: false,
                    validation: {
                        required: true,
                        includeCharacters: []
                    },
                    value: '',
                    error: 'Password cannot be empty',
                    touched: false
                },
            },
            valid: false,
            elements: ['username', 'password'],
            iconPosition: 'left',
            size: 'small',
            loginClicked: false,
            loginError: ''
        }
    }

    checkValidity = (value, validation) => {
        let isValid = true;

        if(validation.required) {
            isValid = (isValid && value.trim() !== '');
        }

        validation.includeCharacters.forEach(char => {
            isValid = (isValid && value.includes(char));
        });

        return isValid;
    }

    manageInputChangeHandler = (event, elementType) => {
        
        const input = event.target.value;
        this.setState(prevState => {

            const loginElements = { ...prevState.loginElements };
            const currentElement = { ...loginElements[elementType] };
            currentElement['value'] = input;
            currentElement['touched'] = true;
            currentElement['valid'] = this.checkValidity(input, currentElement.validation);
            loginElements[elementType] = currentElement;

            return {
                loginElements
            }
        });
    }

    checkFormValid = () => {
        const loginElements = { ...this.state.loginElements };
        let isLoginFormValid = true;
        this.state.elements.forEach(current => {
            const otherElement = { ...loginElements[current] };

            otherElement['valid'] = this.checkValidity(otherElement['value'], otherElement.validation);
            otherElement['touched'] = true;
            loginElements[current] = otherElement;
            isLoginFormValid = (isLoginFormValid && otherElement['valid']);
        });

        return {
            loginElements,
            valid: isLoginFormValid,
            loginClicked: true
        }
    }

    manageLoginHandler = () => {
        
        const { loginElements, valid, loginClicked } = this.checkFormValid();

        this.setState({
            loginElements,
            valid,
            loginClicked,
            loginError: ''
        });

        if(valid && (loginElements['username']['value'] === 'Kabloom' && loginElements['password']['value'] === 'Kabloom')) {
            this.props.manageLogin();
            this.props.history.replace("/portfolio")
        }
        else if(loginElements['username']['value'] !== '' && loginElements['password']['value'] !== '') {
            this.setState({
                loginError: 'Username and Password Not Matching'
            });
        }
    }

    render() {

        const loginInputs = this.state.elements.map(element => {
            return (
                <PMInput 
                    key={element}
                    config={ this.state.loginElements[element]['config'] }
                    iconPosition={ this.state.iconPosition }
                    size={ this.state.size }
                    change={ (event) => this.manageInputChangeHandler(event, element) }
                    value={ this.state.loginElements[element]['value'] }
                    valid={ this.state.loginElements[element]['valid'] }
                    touched={ this.state.loginElements[element]['touched'] }
                    error={ this.state.loginElements[element]['error'] }
                    formValid={ this.state.valid }
                    loginClicked={ this.state.loginClicked }
                />
            );
        });

        return (
            <Card className="login-card" style={{ top: '30%', textAlign: 'center' }}>
                <Card.Body className="login-card-body">
                    <div className="login-logo-container">
                        <img src={PMIcon} height="70px" width="auto" />
                    </div>
                    <div className="login-text-container">
                        <h2 className="login-text">{ this.props.loginText }</h2>
                    </div>
                    { this.state.loginError !== '' ? (
                        <div className="error-container" style={{ textAlign: 'center' }}>
                            { this.state.loginError }
                        </div>) 
                        : 
                        ''
                    }
                    { loginInputs }
                    <div className="login-btn-container">
                        <Button 
                            className="login-btn"
                            onClick={ this.manageLoginHandler }
                            content="Login"
                        />
                    </div>
                </Card.Body>
            </Card>         
        );
    }
}

const mapStateToProps = state => {

    return {
        token: state.auth.token,
        username: state.auth.username, 
    }
}

const mapDispatchToProps = dispatch => {

    return {
        manageLogin: () => dispatch(actionCreators.manageLogin()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);