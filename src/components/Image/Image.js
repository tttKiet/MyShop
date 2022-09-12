import { forwardRef, useState } from 'react';
import images from '~/assets/imgs';

function Image({ src, alt, ...props }, ref) {
    const [fallback, setFallack] = useState('');

    const handlerError = () => {
        setFallack(images.noImages);
    };

    return <img ref={ref} src={src || fallback} {...props} onError={handlerError} />;
}

export default forwardRef(Image);
