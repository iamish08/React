import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map(value => {
              return (
                <li key={value.id}>
                  <p>{value.comment}</p>
                  <p>
                    {" "}
                    -- {value.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit"
                    }).format(new Date(Date.parse(value.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  render() {
    if (this.props.selectedDish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.selectedDish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.selectedDish.comments)}
          </div>
        </div>
      );
    else return <div />;
  }
}

export default DishDetail;
