import React from "react";

export default function Field(props) {
  return( 
    <div className="field">
      <h2>{props.name}</h2>
      <input type={props.type} name={props.id} id={props.id} onChange={(e) => {props.change(e)}} required />
    </div>
  );
}