import React, { useState } from 'react';

function useToggle(pa = false) {
    const [value, setValue] = useState(pa);

    function toggleValue(val) {
        if (typeof val === 'boolean') {
            setValue(val);
        } else {
            setValue(!value);
        }
    }

    return [value, toggleValue];
}

export default useToggle;
