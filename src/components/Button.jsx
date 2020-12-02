import '../scss/app.scss'
import classNames from 'classnames'

export default function Button({outline, cart ,children}) {
    return (
        <button className={classNames('button',
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


