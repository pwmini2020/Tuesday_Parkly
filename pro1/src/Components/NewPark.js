import './AdminPanel.css';
import React, { useState} from 'react';
import { useHistory } from 'react-router';
import Button from "@material-ui/core/Button";
import FormInfo from './Forms/FormInfo';
import FormInv from './Forms/FormInfo';
const NewPark=()=>
{
    const history=useHistory();
  return (
    <div>
        <div className="topcontainer">
            <div className="name1">Parkly</div>
            <div className="panelname">Administrative Panel</div>
            <div className="admin">Admin</div>
            <div style={{flex:"5%"}}></div>
        </div>
        <div style={{display:"flex",marginTop:"30px"}} >
            <div style={{flex: "11%"}}>
            </div>
            <div style={{flex: "84%"}}>
                <div style={{display:"flex"}}>
                    <div style={{flex:"65%"}}>
                        <FormInfo/>
                    </div>
                    <div style={{flex: "35%"}}>
                        <div style={{display:"flex"}}>
                            <div style={{flex:"70%"}}>
                            </div>
                            <div style={{flex:"30%"}}>
                                <div className="prop" style={{width:"100%"}}>
                                    <div className="smallcontainer">
                                        <p>Free Spots</p>
                                    </div>
                                    <p style={{textAlign:"center",verticalAlign:"middle"}}>6</p>
                                </div>
                            </div>
                         </div>
                         <div style={{height:"100px",marginTop:"100px",width:"100%",backgroundColor:"yellow"}}>
                             tu obrazek
                         </div>
                    </div>
                </div>
                <div style={{marginTop:"20px"}}>
                <Button 
          color="secondary"
          variant="outlined"
          style={{ marginRight: "1rem" }}
          onClick={()=>history.push("/home")}
        >Cancel
        </Button>
        <Button  
          color="primary"
          variant="outlined"
          onClick={()=>history.push("/home")}
        >Submit
        </Button>
        </div>
            </div>
            <div style={{flex: "4%"}}></div>
        </div>
    </div>
    );
}
export default NewPark;
const isValid=props=>
    {
      var re = /\S+@\S+\.\S+/;
    if(props.firstName.length<1)
    {
        return false;
    }
      if(props.lastName.length<1)
      {
        return false;
      }
      if(props.email.length<1)
      {
        return false
      }
      else if(!re.test(props.email))
      {
        return false;
      }
      return true;
    }