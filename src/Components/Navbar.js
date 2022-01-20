
// Components
import { Menu } from 'antd';
import React, { useState } from 'react';

// Styles
import '../App.css';
import styles from '../styles.less';

import { BookOutlined, CalendarOutlined, CameraOutlined, ControlOutlined, PhoneOutlined } from '@ant-design/icons';

function Navbar() {
    const [current,setCurrent] = useState('about'); 

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
    <div className="App-header">
        <Menu 
            theme={'dark'}
            onClick={handleClick} 
            selectedKeys={current} 
            mode="horizontal"
            style={styles.menu}>
                <Menu.Item key="music" icon={<ControlOutlined />}>
                  music
                </Menu.Item>
                <Menu.Item key="videosgallery"  icon={<CameraOutlined />}>
                  videos/gallery
                </Menu.Item>
                <Menu.Item key="performancs"  icon={<CalendarOutlined />}>
                  performancs
                </Menu.Item>
                <Menu.Item key="about" icon={<BookOutlined />}>
                  about
                </Menu.Item>
                <Menu.Item key="contact"  icon={<PhoneOutlined />}>
                  contact
                </Menu.Item>
        </Menu>
    </div> 
    );
    
}
  
  export default Navbar;
  