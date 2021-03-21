import '../scss/app.scss'
import classNames from 'classnames'

export default function Button({outline, cart, children, onClick}) {
    return (
        <button onClick={onClick} className={classNames('button',
            {
                'button--outline': outline
            },
            {
                'button--cart': cart
            },
        )}>
            {children}
        </button>
    )
}


