import { createContext, useContext, useEffect, useState } from 'react';
import { loginUser } from '../services/api';




const AuthContext = createContext();
const SESSION_DURATION = 60 * 60 * 1000 * 24 * 90; // 90 jours en millisecondes

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // On commence avec un loading à true pour vérifier la session existante
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            const loginDate = localStorage.getItem('loginDate');

            if (token && username && loginDate) {
                const now = new Date().getTime();
                // Si la session est encore valide, on restaure l'utilisateur
                if (now - parseInt(loginDate, 10) < SESSION_DURATION) {
                    setUser({ username, token });
                } else {
                    // Session expirée, on nettoie les données
                    logout();
                }
            }
            setLoading(false);
        }
        checkAuth();
    }, []);

    const login = async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const data = await loginUser({ username, password });
            // FakeStoreAPI ne renvoie que le token, on garde le username pour l'affichage
            const userData = { username, token: data.token };

            setUser(userData);
            localStorage.setItem('token', data.token);
            localStorage.setItem('username', username);
            localStorage.setItem('loginDate', new Date().getTime().toString());
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('loginDate');
    };

    return (
        <AuthContext.Provider value={{ user, loading, error, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}


// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);