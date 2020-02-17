import React, { useState } from 'react';

const useHover = () => {
    const [hovering, setHovering] = useState(false);

    const onMouseOver = () => {
        setHovering(true);
    };

    const onMouseOut = () => {
        setHovering(false);
    };

    const attrs = {
        onMouseOut,
        onMouseOver
    };

    return [hovering, attrs];
};
export default useHover;
