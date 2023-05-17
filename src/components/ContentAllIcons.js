import React from "react";
import { Icons } from "../assets/icons";
import Dropdown from 'react-bootstrap/Dropdown';

export function ContentAllIcons() {
    const url ="#";

    const icons = [
        {id:1, name: 'Speakers', img: `${Icons.speakers}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-speakers' },
        {id:2, name: 'Equipment', img: `${Icons.equipment}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-equipment' },
        {id:3, name: 'Controls', img: `${Icons.controls}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-controls' },
        {id:4, name: 'Accessories', img: `${Icons.accessories}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-accessories-1' },
        {id:5, name: 'Audio', img: `${Icons.audio}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-audio' },
        {id:6, name: 'Appliances', img: `${Icons.appliances}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-appliances' },
        {id:7, name: 'Television Set', img: `${Icons.television_set}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-television' },
        {id:8, name: 'Digital Watch', img: `${Icons.digital_watch}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-digital-watch' },
        {id:9, name: 'Video Games', img: `${Icons.video_games}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-video-game' },
        {id:10, name: 'Tablets', img: `${Icons.tablets}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-tablets' },
        {id:11, name: 'Accessories', img: `${Icons.accessories2}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-accessories-2' },
        {id:12, name: 'Computers', img: `${Icons.computer}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-computer' },
        {id:13, name: 'Laptops', img: `${Icons.laptops}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-laptops' },
        {id:14, name: 'Smartphones', img: `${Icons.smartPhone}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-smartphones' }
    ];
    return (
        <div className="aside-icons">
            {icons.map((item, index) => {
                return (
                    <React.Fragment key={index}>
                        <div className='wrap-content-icon'  >
                            <div className={` ${item.className1}`}  >
                                <div className="icons-content icons-size" data-toggle="dropdown" aria-haspopup="true">

                                    <div className="wrap-icon-item">
                                        <div className="wrap-img-icon">
                                            <img className="background-color-img-icons" src={item.img} alt="" />
                                        </div>
                                        <div className="icons-img">
                                            <p className='icon-title '>{item.name}</p>
                                        </div>
                                    </div>
                                    <i className="fa fa-chevron-right background-color-icons " aria-hidden="true"></i>

                                </div>

                                <div className="dropdown-menu dropdown-custom" aria-labelledby="dropdownMenuButton">
                                    {item.dropdownContent.map((content, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <a className="dropdown-item" href={url}>{content}</a>
                                            </React.Fragment>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </React.Fragment>
                );
            })}
        </div>

    )
}