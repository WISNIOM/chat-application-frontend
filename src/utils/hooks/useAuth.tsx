import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { getAuthUser } from '../api';

export const useAuth = () => {
    const [loading, setLoading] = useState(true);
    const { user, updateAuthUser } = useContext(AuthContext);
    const controller = new AbortController();

    useEffect(() => {
        getAuthUser()
            .then(({ data }) => {
                console.log(data);
                updateAuthUser(data);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setLoading(false));

        return () => {
            controller.abort();
        };
    }, []);

    return { user, loading };
};