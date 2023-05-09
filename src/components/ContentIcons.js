import React from "react";
import { Dropdown } from "react-bootstrap";



export function ContentIcons(item){
    return(


    <div className='wrap-content-icon' >
        <Dropdown className={` ${item.className1}`}  >
            <Dropdown.Toggle className="icons-content icons-size" data-toggle="dropdown" aria-haspopup="true">

                <div className="wrap-icon-item">
                    <div className="wrap-img-icon">
                        <img className="background-color-img-icons" src={item.img} alt="" />
                    </div>
                    <div className="icons-img">
                        <p className='icon-title '>{item.name}</p>
                    </div>
                </div>
                <i className="fa fa-chevron-right background-color-icons " aria-hidden="true"></i>

            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu dropdown-custom" aria-labelledby="dropdownMenuButton">
                {item.dropdownContent.map((content) => {
                    return (
                        <Dropdown.Item className="dropdown-item" >{content}</Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
        
    </div>
    )
}