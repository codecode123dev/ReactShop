import React from "react";
import { Icons } from "../assets/icons";

import Dropdown from 'react-bootstrap/Dropdown';


function ASide() {
    let url = '#';
    const icons = [
        {name: 'Speakers'  ,img:`${Icons.speakers}`, dropdownContent:['Action', 'Another action', 'Something else here'],className1:'wrap-content-icons-speakers' },
        {name: 'Equipment' ,img:`${Icons.equipment}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-equipment'},
        {name: 'Controls' ,img:`${Icons.controls}`, dropdownContent:['Action', 'Another action', 'Something else here'] ,className1:'wrap-content-icons-controls'},
        {name: 'Accessories' ,img:`${Icons.accessories}`, dropdownContent:['Action', 'Another action', 'Something else here'],className1:'wrap-content-icons-accessories-1'},
        {name: 'Audio' ,img:`${Icons.audio}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-audio'},
        {name: 'Appliances' ,img:`${Icons.appliances}`, dropdownContent:['Action', 'Another action', 'Something else here'] ,className1:'wrap-content-icons-appliances'},
        {name: 'Television Set' ,img:`${Icons.television_set}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-television'},
        {name: 'Digital Watch' ,img:`${Icons.digital_watch}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-digital-watch'},
        {name: 'Video Games' ,img:`${Icons.video_games}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-video-game'},
        {name: 'Tablets' ,img:`${Icons.tablets}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-tablets'},
        {name: 'Accessories' ,img:`${Icons.accessories2}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-accessories-2'},
        {name: 'Computers' ,img:`${Icons.computer}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-computer'},
        {name: 'Laptops' ,img:`${Icons.laptops}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-laptops'},
        {name: 'Smartphones' ,img:`${Icons.smartPhone}`, dropdownContent:['Action', 'Another action', 'Something else here'], className1:'wrap-content-icons-smartphones'}
    ]

    return(
        <aside className="aside col-xl-3">
            <div className="aside-icons">
            {icons.map((item, index) => {
                return (
                    <div className={item.className1}>
                        <Dropdown  key={index} >
                            <Dropdown.Toggle   className="content-dropdown content-item-first" data-toggle="dropdown"  aria-haspopup="true">
                                <img class="background-color-img-icons" src={item.img} alt="" />
                                <div class="icons-img">
                                    <p>{item.name}</p>
                                </div>
                                <i className="fa fa-chevron-right background-color-icons" aria-hidden="true"></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu key={index} className="dropdown-menu dropdown-custom" aria-labelledby="dropdownMenuButton">
                            {item.dropdownContent.map((content, index) => {
                                return (
                                    <Dropdown.Item key={index} className="dropdown-item" >{content}</Dropdown.Item>
                                    );
                                })}
                            </Dropdown.Menu>

                        </Dropdown>
                    </div>
                );
            })}
            </div>
        </aside>
    )

}
export function PageContent() {
    return(
        <>
            <div className="page-content row">
                <ASide/>
            </div>
        </>
    )
}
