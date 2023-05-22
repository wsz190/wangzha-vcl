import React, { useContext } from 'react'; // 导入 React 和 useContext
import classNames from 'classnames'; // 导入 classNames 库
import { MenuContext } from './menu'; // 导入上下文 MenuContext
var MenuItem = function (props) {
    var index = props.index, disabled = props.disabled, className = props.className, style = props.style, children = props.children; // 将 props 解构
    var context = useContext(MenuContext); // 获取 MenuContext 上下文
    var classes = classNames('menu-item', className, {
        'is-disabled': disabled,
        'is-activate': context.index === index
    });
    var handleClick = function () {
        if (context.onSelect && !disabled && (typeof index === 'string')) { // 如果 onSelect 回调函数存在、未禁用、枚举项为字符串类型
            context.onSelect(index); // 调用 onSelect 回调函数
        }
    };
    return (
    // 渲染 li 元素
    React.createElement("li", { className: classes, style: style, onClick: handleClick }, children));
};
MenuItem.displayName = 'MenuItem'; // 显示名称
export default MenuItem; // 导出 MenuItem 组件
