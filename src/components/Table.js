import React from 'react';

function Table(props) {
    return (
        <table>
            <thead>
                <tr>
                    {
                        Object.entries(props.data).map((item, i) => {
                            console.log(item[0])
                        })
                    }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table