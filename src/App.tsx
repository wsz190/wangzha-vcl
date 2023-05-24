import React, { useState } from 'react';
import './App.css';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon';
import Input from './components/Input/input';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Transition from './components/Transition/index';
library.add(fas)



function App() {
  const  [shows,reshow] = useState(false)
  return (
    <div className="App">
      <Input/>
      <Icon icon="arrow-down" className='arrow-icon' />
      <Button autoFocus>Hello</Button>
      <Button className='btn-xxx'>Hello</Button>
      <Button disabled>Disabled Button</Button>
      <Button btnType="danger" size="small">Primary-Lrage-Button</Button>
      <Button btnType="primary" size='large'>Danger-Small-Button</Button> 
      <Button btnType='link' href='http://www.xxx.com' disabled>被禁用的按钮</Button> 
      <Button btnType='default' href='http://www.xxx.com'  target='target'>在新窗口打开</Button>
      <Menu onSelect={(index)=>{alert(index)}}>
        <MenuItem >1</MenuItem>
        <MenuItem  >2</MenuItem>
        <MenuItem>3</MenuItem>
        <SubMenu title=''>
          <MenuItem>3-1</MenuItem>
          <MenuItem>3-2</MenuItem>
          <MenuItem>3-3</MenuItem>
        </SubMenu>
        <MenuItem>4</MenuItem>
      </Menu>
      <Menu defaultIndex={'0'} mode='vertical' onSelect={(index)=>{alert(index)}}>
        <MenuItem >123</MenuItem>
        <MenuItem >456</MenuItem>
        <MenuItem >789</MenuItem>
      </Menu>
      <Icon icon="angle-down" className="arrow-icon" />
      <Button size='large' onClick={()=>{
        console.log('按钮触发')
        reshow(!shows)
      }}>toggle</Button>
      <Transition
        in={shows}
        timeout={300}
        animation="zoom-in-bottom"
      >
    <p>1334566+66</p>
      </Transition>
    </div>
  );
}

export default App;
