import React, { useState, createContext, } from "react";
import classNames from "classnames";
// 创建MenuContext上下文对象，并指定其默认值
export var MenuContext = createContext({ index: '0' });
var Menu = function (props) {
    var className = props.className, mode = props.mode, style = props.style, children = props.children, defaultIndex = props.defaultIndex, onSelect = props.onSelect, defaultOpenSubMenus = props.defaultOpenSubMenus;
    var _a = useState(defaultIndex), currentActive = _a[0], setActive = _a[1]; // 激活的菜单项下标和setter函数
    var classes = classNames('wangzha-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical', // 是否为横向菜单
    });
    var handleClick = function (index) {
        setActive(index);
        if (onSelect) {
            onSelect(index);
        }
    };
    var passedContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode: mode,
        defaultOpenSubMenus: defaultOpenSubMenus,
    };
    var renderChildren = function () {
        return React.Children.map(children, function (child, index) {
            var childElement = child; // 将子元素转换为FunctionComponentElement
            var displayName = childElement.type.displayName; // 获取子元素的类型名称
            if (displayName === 'MenuItem' || displayName === 'SubMenu') { // 如果子元素的类型为MenuItem或SubMenu，则克隆这个元素，同时添加index属性
                return React.cloneElement(childElement, {
                    index: index.toString()
                });
            }
            else {
                console.error("Warning: Menu has a child which is not a MenuItem component"); // 否则输出错误警告信息
            }
        });
    };
    return (React.createElement("ul", { className: classes, style: style },
        React.createElement(MenuContext.Provider, { value: passedContext }, renderChildren())));
};
Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
};
export default Menu; // 导出Menu组件
