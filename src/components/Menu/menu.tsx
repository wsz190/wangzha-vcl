import React,{useState,createContext, } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";

// 定义字符串字面量类型，表示菜单的布局模式
type MenuMode =  'horizontal' | 'vertical' ;
// 定义回调函数类型，被选择菜单项的下标会作为参数传入此函数
type SelectCallback = (selectedIndex:string) => void;

// 定义Menu组件的属性接口类型
export interface MenuProps {
    defaultIndex?:string, // 默认激活的菜单项下标
    className?:string, // 传入的className
    mode?:MenuMode; // 菜单布局的模式
    style?:React.CSSProperties; // 自定义样式属性
    onSelect?:SelectCallback; // 菜单项被选择时的回调函数
    defaultOpenSubMenus?: string[]; // 默认展开的SubMenu下标
    children?:React.ReactNode // Menu组件的子元素
}

// 定义Menu组件的上下文接口类型
interface IMenuContext {
    index:string, // 当前激活的菜单项下标
    onSelect?:SelectCallback, // 选择菜单项的回调函数
    mode?:MenuMode, // 菜单布局的模式
    defaultOpenSubMenus?: string[]; // 默认展开的SubMenu下标
}

// 创建MenuContext上下文对象，并指定其默认值
export const MenuContext = createContext<IMenuContext>({index:'0'})

const Menu:React.FC<MenuProps> = (props) => {
    const {className,mode,style,children,defaultIndex,onSelect,defaultOpenSubMenus} = props;
    const [currentActive,setActive] = useState(defaultIndex); // 激活的菜单项下标和setter函数
    const classes = classNames('wangzha-menu',className,{
        'menu-vertical':mode === 'vertical', // 是否为竖向菜单
        'menu-horizontal':mode !== 'vertical', // 是否为横向菜单
    })
    const handleClick = (index:string) => { // 处理菜单项的单击事件，并调用onSelect回调函数
        setActive(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext:IMenuContext = { // Menu组件的上下文对象
        index:currentActive ? currentActive : '0', // 如果currentActive为空，则index为'0'
        onSelect:handleClick, // 处理选择菜单项的回调函数
        mode, // 菜单布局的模式
        defaultOpenSubMenus, // 默认展开的SubMenu下标
    }
    const renderChildren = () => { // 渲染子元素
        return React.Children.map(children,(child,index) => { // 遍历所有子元素
            const childElement = child as React.FunctionComponentElement<MenuItemProps> // 将子元素转换为FunctionComponentElement
            const { displayName } = childElement.type // 获取子元素的类型名称
            if(displayName === 'MenuItem' || displayName  ===  'SubMenu'){ // 如果子元素的类型为MenuItem或SubMenu，则克隆这个元素，同时添加index属性
                return React.cloneElement(childElement,{
                    index:index.toString()
                })
            } else {
                console.error("Warning: Menu has a child which is not a MenuItem component") // 否则输出错误警告信息
            }
        })
    }
    
    return(
        <ul className={classes} style={style}>
            {/* 将Menu组件的上下文对象传递给MenuContext.Provider */}
             <MenuContext.Provider value={passedContext}> 
                {/* 渲染所有子元素 */}
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex:'0',
    mode:'horizontal',
    defaultOpenSubMenus:[],
}

export default Menu; // 导出Menu组件