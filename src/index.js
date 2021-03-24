import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './HomePage'
import './index.css';

ReactDOM.render(<HomePage />, document.getElementById('root'));



//HOW TO USE FUCTIONAL COMPONENT RATHER THAN W CLASS EXTENDS REACT.COMPONENT
// const randomComponent = (props)=>{
//     render() {
//         return (
//             <div>HELLO MOFOS</div>
//         );
//     }
// }
// export default randomComponent;