import {ErrorProps} from '../../types'

function Error({ error } : ErrorProps) {
    return (
        <div>
            <p>{error?.message}</p>
        </div>
    )
}

export default Error