import React, { forwardRef } from 'react'

const Button = forwardRef(
    (
        {
            children,
            variant = 'primary',
            className = '',
            type = 'button',
            disabled = false,
            ...props
        },
        ref
    ) => {
        const base =
            'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

        const variants = {
            primary:
                'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
            secondary:
                'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 focus:ring-gray-300',
        }

        const classes = `${base} ${variants[variant] || variants.primary} ${className}`.trim()

        return (
            <button ref={ref} type={type} className={classes} disabled={disabled} {...props}>
                {children}
            </button>
        )
    }
)

export default Button