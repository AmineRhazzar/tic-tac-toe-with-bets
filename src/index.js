import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Router'
import './index.css';

ReactDOM.render(<Home />, document.getElementById('root'));



//HOW TO USE FUCTIONAL COMPONENT RATHER THAN W CLASS EXTENDS REACT.COMPONENT
// const randomComponent = (props)=>{
//     render() {
//         return (
//             <div>HELLO MOFOS</div>
//         );
//     }
// }
// export default randomComponent;