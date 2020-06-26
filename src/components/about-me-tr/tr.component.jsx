import React from 'react';

const Tr = ({title, info}) => (
    <tr>
        <td><strong>{title}</strong></td>
        <td>{info}</td>
    </tr>
)

export default Tr;