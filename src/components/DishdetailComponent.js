import React, { Component } from "react";
import moment from "moment"
import { Card,CardBody,CardImg, CardImgOverlay,CardTitle,CardText } from "reactstrap";

class DishDetail extends Component{
    constructor(props){
        super(props);

    }
    renderDish(dishSelected){
        return(
            <Card >
                <CardImg width="100%" src={dishSelected.image} alt={dishSelected.name}/>
                <CardTitle className="m-3 h3">{dishSelected.name}</CardTitle>
                <CardText className="m-3">{dishSelected.description}</CardText>
            </Card>
         );
    }
    renderComments(dishSelected){
        if(dishSelected.comments!=null){
            const dishCommnet=dishSelected.comments.map((dish)=>{
                return(  
                    <div key={dish.id}>
                        <p>{dish.comment}</p>
                        <p>{"--"+dish.author+", "+moment(dish.date).format("MMM D, YYYY")}</p>
                    </div>
                        
                                                                         
                )
            });
    
    return(
        <div >
        <h4>Comments</h4>
        {dishCommnet}
        </div>
    );}
else{
    return(<div></div>);
}}
    render(){
        const dishSelected=this.props.selectedDish;
        if(dishSelected!=null){
        return(                        
            <div className="row ">
                <div className="col-12 col-md-5 m-1">
                {this.renderDish(dishSelected)}
                </div>
               <div className="col-12 col-md-5 m-1">
               {this.renderComments(dishSelected)}
               </div>               
            </div>
            
        );
        }
        else{
            return(<div></div>);
        }
    }
}
export default DishDetail;