// 引入React, FC, AnchorHTMLAttributes和ButtonHTMLAttributes模块
import React, {FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

// 引入classNames模块
import classNames from 'classnames'

// 定义ButtonSize和ButtonType两种类型
export type ButtonSize =  'small'  | 'large' | 'normal'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';
// export enum ButtonSize {
//     Large = 'lg',
//     Small = 'sm'
// }
// export enum ButtonType {
//     Primary = 'primary',
//     Default = 'default',
//     Danger = 'danger',
//     Link = 'link'
// }



// 定义BaseButtonProps 接口类型，包括标签类名(classname)、是否不可用(disabled)、
// 标签大小(size)、标签类型(btnType)、标签内容(children)、超链接地址（href）
interface BaseButtonProps  {
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?:string;
}

// 将BaseButtonProps与ButtonHTMLAttributes或AnchorHTMLAttributes接口类型结合，定义成原生的按钮属性和超链接属性
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

// 定义Button为一个React函数组件，参数类型为ButtonProps，返回值为JSX表达式
export const Button:FC<ButtonProps> = (props) => {
    const {btnType,className,disabled,size,children,href,...restProps} = props; // 解构ButtonProps参数
    const classes = classNames('btn',className,{
        [`btn-${btnType}`]:btnType,
        [`btn-${size}`]:size,
        'disabled':(btnType === 'link') && disabled
    })  // 拼接class类名，使用了classNames函数库

    if (btnType === 'link' && href ){
        return (
            <a
                className={classes}
                href={href}
                {...restProps}
            >
                {children}
            </a>  // 返回超链接标签
        )
    }else {
        return(
            <button
                className={classes}
                disabled={disabled}
                {...restProps}
            >
                {children}
            </button>  // 返回原生的按钮标签
        )
    }
}

Button.defaultProps ={
    disabled:false,  // 默认启用
    btnType: 'default'// 默认类型为default
}

export default Button;  // 默认导出Button组件