import { useState, useEffect } from 'react';

function useLoader(delay = 3000) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer); // تنظيف الـ timer لما الصفحة تتغير
    }, [delay]);

    return isLoading;
}

export default useLoader;