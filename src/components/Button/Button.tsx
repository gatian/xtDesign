import React from 'react'
import { tuple } from '../../utils/type'

// 还是枚举更明显啊？？

// ===== 按钮类型 ======
const buttonType = tuple('primary', 'default', 'danger', 'link', 'text', 'dashed')
type ButtonType = (typeof buttonType)[number]
// ===== 按钮大小 ======
const buttonSize = tuple('large', 'small')
type ButtonSize = (typeof buttonSize)[number]

export interface BaseButtonProps {
    type ?: ButtonType;
}
