 import { Button} from "react-bootstrap";
 import 'bootstrap/dist/css/bootstrap.min.css';
 import React from "react";


 function Bootstrap(){
    return (
        <div>  
            <h1>Bootstrap</h1>
            <Button> Button</Button>
            <Button className="btn custom-red-button">Button</Button>
            <Button className="btn btn-success">Button</Button>
            <Button className="btn btn-danger">Button</Button>
           
        </div>
    )
}


export default Bootstrap;