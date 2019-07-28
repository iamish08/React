import React ,{ Component} from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,Modal, ModalHeader, ModalBody,
  CardTitle,Breadcrumb, BreadcrumbItem,Row,Label,Col,
   Button
} from "reactstrap";
import { Link } from 'react-router-dom';
import {Control , LocalForm, Errors} from 'react-redux-form';



const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


 // Assignment 3
    
class CommentForm extends Component {

  constructor(props){
    super(props);

    this.state={
      isModalOpen : false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.submitHandel = this.submitHandel.bind(this);
  }

  toggleModal = () => {
    this.setState( {
      isModalOpen : !this.state.isModalOpen
    })
  }
  submitHandel(values){
       console.log("curent state is :" +JSON.stringify(values));
       alert("curent state is :" +JSON.stringify(values));
  }
  render()
  {
    return(
      <React.Fragment>
        <Button className="bg-white text-dark" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg">Submit Comment</span></Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.submitHandel(values)}>
          <Row className="form-group">
                            <Label htmlFor="rating" md={4}>Rating</Label>
                            <Col md={12}>
                                <Control.select model=".rating" id="rating" name="rating"
                                    className="form-control">
                                      <option>1</option>
                                      <option>2</option>
                                      <option>3</option>
                                      <option>4</option>
                                      <option>5</option>
                                </Control.select>
                            </Col>
                </Row>
                <Row className="form-group">
                            <Label htmlFor="author" md={4}>Your Name</Label>
                            <Col md={12}>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15), required
                                    }}
                                      />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                      required : 'Reqiuired',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                  />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Label htmlFor="comment" md={4}>Comment</Label>
                            <Col md={12}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    className="form-control"
                                    
                                    rows="6"
                                      />
                                
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col >
                            <Button type="submit" color="primary" >Submit</Button>
                        </Col>
                        </Row>

            </LocalForm>
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}



  function RenderDish({dish}){
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

  function RenderComments({comments}) {
    if (comments != null) {
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
            <li>
            <CommentForm/>
            </li>
          </ul>
         
        </div>
             
      );
    }
  }

  const DishDetail = (props) => {
    if (props.dish != null)
      return (
        <div class="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to='/menu'>Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 col-12 m-1">
            <RenderDish dish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
            </div>
        </div>
        </div>
      );
    else return <div />;
  }


export default DishDetail;


