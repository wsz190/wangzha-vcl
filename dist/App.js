import React from 'react';
import './App.css';
import Button from './components/Button/button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Button, { autoFocus: true }, "Hello"),
        React.createElement(Button, { className: 'btn-xxx' }, "Hello"),
        React.createElement(Button, { disabled: true }, "Disabled Button"),
        React.createElement(Button, { btnType: "danger", size: "small" }, "Primary-Lrage-Button"),
        React.createElement(Button, { btnType: "primary", size: 'large' }, "Danger-Small-Button"),
        React.createElement(Button, { btnType: 'link', href: 'http://www.xxx.com', disabled: true }, "\u88AB\u7981\u7528\u7684\u6309\u94AE"),
        React.createElement(Button, { btnType: 'default', href: 'http://www.xxx.com', target: 'target' }, "\u5728\u65B0\u7A97\u53E3\u6253\u5F00"),
        React.createElement(Menu, { onSelect: function (index) { alert(index); } },
            React.createElement(MenuItem, null, "1"),
            React.createElement(MenuItem, null, "2"),
            React.createElement(MenuItem, null, "3"),
            React.createElement(SubMenu, { title: '' },
                React.createElement(MenuItem, null, "3-1"),
                React.createElement(MenuItem, null, "3-2"),
                React.createElement(MenuItem, null, "3-3")),
            React.createElement(MenuItem, null, "4")),
        React.createElement(Menu, { defaultIndex: '0', mode: 'vertical', onSelect: function (index) { alert(index); } },
            React.createElement(MenuItem, null, "123"),
            React.createElement(MenuItem, null, "456"),
            React.createElement(MenuItem, null, "789"))));
}
export default App;
