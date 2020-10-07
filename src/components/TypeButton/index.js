import React from 'react';

import { Button } from './styles';

const TypeButton = ({ color, title }) => {
    return (
        <Button color={color}>{title}</Button>
    );
}

export default TypeButton;