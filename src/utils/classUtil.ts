export const getPrefixCls = (suffix ?: string, customPrefixCls ?: string) => {
    if (customPrefixCls) return customPrefixCls

    return suffix ? `xt-${suffix}` : 'xt'
}
