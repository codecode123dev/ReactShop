import React from "react";
import { Icons } from "../assets/icons";
import Dropdown from 'react-bootstrap/Dropdown';


export function ContentAllIcons() {

    const icons = [
        { name: 'Speakers', img: `${Icons.speakers}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-speakers' },
        { name: 'Equipment', img: `${Icons.equipment}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-equipment' },
        { name: 'Controls', img: `${Icons.controls}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-controls' },
        { name: 'Accessories', img: `${Icons.accessories}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-accessories-1' },
        { name: 'Audio', img: `${Icons.audio}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-audio' },
        { name: 'Appliances', img: `${Icons.appliances}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-appliances' },
        { name: 'Television Set', img: `${Icons.television_set}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-television' },
        { name: 'Digital Watch', img: `${Icons.digital_watch}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-digital-watch' },
        { name: 'Video Games', img: `${Icons.video_games}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-video-game' },
        { name: 'Tablets', img: `${Icons.tablets}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-tablets' },
        { name: 'Accessories', img: `${Icons.accessories2}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-accessories-2' },
        { name: 'Computers', img: `${Icons.computer}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-computer' },
        { name: 'Laptops', img: `${Icons.laptops}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-laptops' },
        { name: 'Smartphones', img: `${Icons.smartPhone}`, dropdownContent: ['Action', 'Another action', 'Something else here'], className1: 'wrap-content-icons-smartphones' }
    ];
    return (
        <div className="aside-icons">
            {icons.map((item, index) => {
                return (
                    <>
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
                    </>
                );
            })}
        </div>

    )
}