import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon ,FontAwesomeIconProps} from "@fortawesome/react-fontawesome";

// 类型定义：ThemeProps可以是'primary'、'secondary'、'success'、'info'、'warning'、'danger'、'light'或'dark'
export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

// 定义IconProps接口，继承FontAwesomeIconProps接口，添加theme属性
export interface IconProps extends FontAwesomeIconProps {
    theme? : ThemeProps // theme属性值为上面定义的ThemeProps类型之一
}

// 无状态函数组件Icon，使用IconProps接口指定props类型
const Icon:React.FC<IconProps> = (props) => {
    const {className,theme,...restProps} = props;
    // 使用classnames库生成class字符串
    const classnames = classNames('viking-icon',className,{
        [`icon-${theme}`]:theme // 如果theme属性存在，则添加类名'icon-xxx'
    })
    // 返回FontAwesomeIcon组件，并添加上述生成的class字符串和其余props属性
    return (
        <FontAwesomeIcon className={classnames} {...restProps}/>
    )
}

// 导出Icon组件
export default Icon