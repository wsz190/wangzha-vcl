var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
// 引入React, FC, AnchorHTMLAttributes和ButtonHTMLAttributes模块
import React from 'react';
// 引入classNames模块
import classNames from 'classnames';
// 定义Button为一个React函数组件，参数类型为ButtonProps，返回值为JSX表达式
export var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, children = props.children, href = props.href, restProps = __rest(props, ["btnType", "className", "disabled", "size", "children", "href"]); // 解构ButtonProps参数
    var classes = classNames('btn', className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a['disabled'] = (btnType === 'link') && disabled,
        _a)); // 拼接class类名，使用了classNames函数库
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children) // 返回超链接标签
        );
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children) // 返回原生的按钮标签
        );
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default' // 默认类型为default
};
export default Button; // 默认导出Button组件
