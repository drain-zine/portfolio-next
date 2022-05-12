import React from 'react';
import styles from './TextBox.module.scss';
import classnames from 'classnames';

const TextBox = ({children, className, pos = 'left', stack ='horz', ...props}) => {
    return(
        <div 
            className={classnames(classnames, styles[`${pos}Text`], styles[`${stack}Text`])}
            {...props}
        >
            {children}    
        </div>
    );
};

export default TextBox;