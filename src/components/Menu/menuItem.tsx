import React, { useContext } from 'react'  // 导入 React 和 useContext
import classNames from 'classnames'  // 导入 classNames 库
import { MenuContext } from './menu'  // 导入上下文 MenuContext

export interface MenuItemProps {
    index?:string;  // 枚举项
    disabled?:boolean;  // 是否禁用
    className?:string;  // CSS 类名称
    style?:React.CSSProperties;  // CSS 样式
    children:React.ReactNode;  // 子元素
}

const MenuItem:React.FC<MenuItemProps> = (props) =>{  // 定义 MenuItem 组件
    const {index,disabled,className,style,children} = props;  // 将 props 解构
    const context = useContext(MenuContext);  // 获取 MenuContext 上下文
    const classes = classNames('menu-item',className,{  // 使用 classNames ，组装 CSS 类名
        'is-disabled':disabled,
        'is-activate':context.index === index
    })
    const handleClick = () => {  // 定义点击事件处理函数
        if(context.onSelect && !disabled && (typeof index === 'string')){  // 如果 onSelect 回调函数存在、未禁用、枚举项为字符串类型
            context.onSelect(index)  // 调用 onSelect 回调函数
        }
    }
    return (
        // 渲染 li 元素
        <li className={classes} style={style} onClick={handleClick}>  
            {/* 渲染子元素 */}
            {children} 
        </li>
    )
}

MenuItem.displayName = 'MenuItem'  // 显示名称

export default MenuItem;  // 导出 MenuItem 组件