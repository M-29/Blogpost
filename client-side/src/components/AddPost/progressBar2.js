import React from "react";
import './progressBar2.css'
class ProgressbarSecond extends React.Component{
    constructor(props){
        super(props)
        this.movetoprogressone=this.movetoprogressone.bind(this)

    }
    movetoprogressone(){
        this.props.setChangeState({isProgressbarTriggered:false})
    }
    render(){
    return(
        <React.Fragment>
        <div className="stepContainer">
                        <div className="stepItem completed">
                            <div className="stepCounter" onClick={this.movetoprogressone}>1</div>
                        </div>
                        
                        <div className="stepItem1 completed1">
                            <div className="stepCounter">2</div>
                        </div>
                    </div>
                    <div className="headings">
                    <div className="stepName1">Personal details</div>
                    <div className="stepName2">Pet details</div>
                    </div>
           </React.Fragment>         
                    
    )
}
}
export default ProgressbarSecond;