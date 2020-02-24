import React from 'react';

const Count = ({arr}) => (
    <ul>
      {
        arr.map((el,i) => <li key={i}>{el}</li>)
      }
    </ul>
);



export default Count;