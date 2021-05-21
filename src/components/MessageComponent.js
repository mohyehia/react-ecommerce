import { Alert } from 'bootstrap';
import React from 'react'

const MessageComponent = ({ variant, children }) => {
    return (
        <Alert variant={variant}>
            {children}
        </Alert>
    )
}

MessageComponent.defaultProps = {
    variant: 'info'
}
export { MessageComponent };
