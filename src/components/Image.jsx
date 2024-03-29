// Hooks
import { useState } from 'react';

const Image = ({ imagePath }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoaded = () => {
        setImageLoaded(true);
    };

    return (
        <>
            {!imageLoaded && (
                <div className='skeleton' style={{ width: '600px', height: '600px' }}></div>
            )}
            <img
                src={imagePath}
                alt="Imagem"
                style={!imageLoaded ? { display: 'none' } : {}}
                onLoad={handleImageLoaded}
            />
        </>
    )
}

export default Image