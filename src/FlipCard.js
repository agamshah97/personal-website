import React from "react"

function FlipCard(props) {
    return (
        <div className="flip-card" style={{margin:"10px"}}>
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img height="200px" style={{margin:"10px"}} src={props.image} alt="About" />
                    <div style={{paddingLeft:"30px", paddingRight:"30px", paddingTop:"10px"}}>
                        <h5 style={{margin:"10px"}}>{props.title}</h5>
                        <div style={{color:"#999999", marginTop:"10px"}}>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <span style={{marginRight:"10px"}}>{props.contentTopLeft}</span>
                                    <span style={{marginRight:"10px"}}>{props.contentTopRight}</span>
                                </div>
                            </div>
                            <div style={{display:"flex", flexDirection:"column"}}>
                                <div style={{display:"flex", justifyContent:"space-between"}}>
                                    <span style={{marginRight:"10px"}}>{props.contentBottomLeft}</span>
                                    <span style={{marginRight:"10px"}}>{props.contentBottomRight}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flip-card-back" style={{display:"flex", flexDirection:"column", padding:"30px", justifyContent:"center", textAlign:"left"}}>
                    <p>{props.backLine1}</p>
                    <p>{props.backLine2}</p>
                    <p>{props.backLine3}</p>
                </div>
            </div>
        </div>
    );
}

export default FlipCard;