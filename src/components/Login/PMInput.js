import React from 'react';
import { Input, Icon } from 'semantic-ui-react';

const pmInput = props => {

    return (
        <div>
            <div className="login-container">
                <Input 
                    className="login-input"
                    size={ props.size } 
                    iconPosition={ props.iconPosition } 
                    placeholder={ props.config.placeholder } 
                    type={ props.config.type }
                >
                    <Icon name={ props.config.icon } />
                    <input value={ props.value } onChange={ props.change } className={ (!props.valid && props.touched && props.loginClicked ? 'error-input' : '')} />
                </Input>
            </div>
            <div className="input-error-container">
                { (!props.valid && props.touched && props.loginClicked ? props.error : '') }
            </div>
        </div>
    );
}

export default pmInput;