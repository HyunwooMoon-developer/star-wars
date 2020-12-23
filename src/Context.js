import React from 'react';

const Context = React.createContext({
    lists : [],
    handleSearch : () => {},
    handleSubmit : () => {},
})

export default Context;