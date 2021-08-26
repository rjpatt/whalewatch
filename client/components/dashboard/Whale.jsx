import React from "react";
import whaleBlue from "../../assets/whaleBlue.png"
import whaleRed from "../../assets/whaleRed.png"

const Whale = ({ info }) => {
  //each whale will represent a container
  //health status will indicate a css class to have different colors
  //should they include names?
  return (
    // put appropriate stuff here
    
    <div className="whale-display">
      <img src={whaleBlue} className="whale"/><br/>Container {info.name} <br/>{info.size} MB
      {/* <img src={whaleRed} /><br/>My name is {info.name} */}
      
      <img src={whaleRed} className="whale"/>
    </div>
    
  )
}

export default Whale;