import React from "react";

export default function Travel(props) {
  return (
    <div className="travel--card">
      <div>
        <img className="travel--img" src={props.travelData.imageUrl} alt="" />
      </div>

      <div className="travel--location">
        <img className="location--logo" src="../Images/map.png" alt="" />
        <span> {props.travelData.location} </span>
        <span>
          <a className="grey" href={props.travelData.googleMapsUrl}>
            {" "}
            View on Google Maps
          </a>
        </span>

        <h2 className="travel--title"> {props.travelData.title} </h2>
        <p className="travel--date">
          {props.travelData.startDate} - {props.travelData.endDate}
        </p>

        <p className="travel--description">{props.travelData.description}</p>
      </div>
    </div>
  );
}
