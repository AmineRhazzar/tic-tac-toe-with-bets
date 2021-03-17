import React from 'react';
import OComponent from './OComponent';
import XComponent from './XComponent';
import './index.css';


class Board extends React.Component {
    render() {
        const cases = this.props.boardShape.map((caseNumber, i) => {
            var customClassName = "case case" + i;
            if (typeof (caseNumber) === 'string') {
                return (
                    <div className={customClassName} key={i}>
                        <XComponent />
                    </div>
                );
            } else {
                if (caseNumber) {
                    return (
                        <div className={customClassName} key={i}>
                            <OComponent />
                        </div>
                    );
                } else {
                    return <div className={customClassName} key={i} onClick={()=>{this.props.updateBoardShape(i);}}></div>
                }
            }
        })
        return (
            <div className="board">
                {cases}
            </div>
        );
    }
}

export default Board;