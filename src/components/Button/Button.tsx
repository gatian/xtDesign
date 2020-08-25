import React from 'react'
import classNames from 'classnames'
import { getPrefixCls } from '../../utils/classUtil'
import { tuple } from '../../utils/typeUtil'

const buttonType = tuple('primary', 'default', 'danger', 'link', 'text', 'dashed') // 按钮类型
type ButtonType = (typeof buttonType)[number]
const buttonSize = tuple('large', 'middle','small') // 按钮大小类型
type ButtonSize = (typeof buttonSize)[number]
const buttonNativeType = tuple('submit', 'reset', 'button') // 按钮原生类型
type ButtonNativeType = (typeof buttonNativeType)[number]

export interface BaseButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    prefixCls?: string;
    className?: string;
    children?: React.ReactNode;
}

// 原生按钮的 props
export interface NativeButtonProps extends BaseButtonProps{
    nativeType?: ButtonNativeType;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<NativeButtonProps> = (props) => {
    const {
        type,
        size,
        prefixCls: customPrefix, // 这样用户就可以自定义前缀类名
        className,
        children,
        nativeType
    } = props

    const prefixCls = getPrefixCls('btn', customPrefix)
    const classes = classNames('btn', className, {
        [`${prefixCls}-${type}`]: type,
        [`${prefixCls}-${size}`]: size
    })

    return (
        <button
            type={nativeType}
            className={classes}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    nativeType: 'button',
    type: 'primary'
}

export default Button
