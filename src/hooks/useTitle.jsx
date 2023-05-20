import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}-Toy collection`;
    }, [title])
}
export default useTitle;