import React, { Component } from "react";
import { Loading } from "./loadingcomponent";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Button, Modal, ModalBody, ModalHeader, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { baseURL } from "../Shared/baseURL";

const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const required = (val) => val && val.length;

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleComment(values) {
    this.toggleModal();
    this.props.postComment(
      this.props.dishId,
      values.rating,
      values.author,
      values.comment
    );
  }
  render() {
    return (
      <React.Fragment>
        <Button color="light" onClick={this.toggleModal}>
          <span className="fa fa-pencil fa-lg"> Submit Comment</span>
        </Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <Label htmlFor="rating">Rating</Label>
            <LocalForm onSubmit={(values) => this.handleComment(values)}>
              <Control.select
                model=".rating"
                name="rating"
                className="form-control"
                validators={{
                  required,
                }}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
              <Errors
                className="text-danger"
                model=".rating"
                show="touched"
                messages={{
                  required: "Required",
                }}
              />
              <Label htmlFor="Author" className="mt-4">
                Your Name
              </Label>
              <Control.text
                model=".author"
                name="author"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 3 characters",
                  maxLength: "Must be less than 15 characters",
                }}
              />
              <Label htmlFor="comment" className="mt-4">
                Comment
              </Label>
              <Control.textarea
                model=".comment"
                name="comment"
                className="form-control"
                rows={6}
                validators={{
                  required,
                  minLength: minLength(3),
                }}
              />
              <Errors
                className="text-danger"
                model=".comment"
                show="touched"
                messages={{
                  required: "Required",
                  minLength: "Must be greater than 3 characters",
                }}
              />
              <Button color="primary" type="submit" className="mt-3">
                Submit Comment
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" src={baseURL + dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  if (comments != null) {
    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            return (
              <li key={comment.id}>
                {comment.comment}
                <br />
                <br />
                -- {comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
                <br />
                <br />
              </li>
            );
          })}
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments
              comments={props.comments}
              postComment={props.postComment}
              dishId={props.dish.id}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
