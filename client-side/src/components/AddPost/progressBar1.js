import React from "react";
import './addPost.css'
class Progressbarone extends React.Component {
    constructor(props) {
        super(props)
        this.movetoprogresstwo = this.movetoprogresstwo.bind(this)

    }
    movetoprogresstwo() {
        this.props.setChangeState2({ isProgressbarTriggered: true })
    }
    render() {
        return (
            <React.Fragment>
                <div className="step-container">
                    <div className="step-item completed">
                        <div className="step-counter" >1</div>
                    </div>

                    <div className="step-item1 completed1">
                        <div className="step-counter1" onClick={this.movetoprogresstwo}>2</div>
                    </div>
                </div>
                <div className="headings">
                    <div className="step-name1">Personal details</div>
                    <div className="step-name2">Pet details</div>
                </div>

            </React.Fragment>

        )
    }
}
export default Progressbarone;