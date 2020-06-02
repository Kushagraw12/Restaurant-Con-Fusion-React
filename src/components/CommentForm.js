import React, { Component } from "react";
import { Button, Modal, ModalBody, ModalHeader, Label } from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";

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
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
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
              <Label htmlFor="Name" className="mt-4">
                Your Name
              </Label>
              <Control.text
                model=".name"
                name="name"
                className="form-control"
                validators={{
                  required,
                  minLength: minLength(3),
                  maxLength: maxLength(15),
                }}
              />
              <Errors
                className="text-danger"
                model=".name"
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
export default CommentForm;
