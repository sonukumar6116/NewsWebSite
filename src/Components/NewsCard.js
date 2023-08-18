import React, { Component } from "react";
export default class NewsCard extends Component {
  render() {
      
    let { title, imageUrl, newsUrl, description,date } = this.props;

    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="Sorry..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p style={{color:"red"}}>{date}</p>
          <a href={newsUrl} className="btn btn-success" target="_blank">
            Complete News...
          </a>
        </div>
      </div>
    );
  }
}
