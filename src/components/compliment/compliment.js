import './compliment.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomCompliment } from '../../redux/compliments/complimentOperations';
import { USER_TYPES, COMPLIMENT_TYPES } from '../../constants';

const typesMap = {
    [USER_TYPES.HIM]: COMPLIMENT_TYPES.FOR_HIM,
    [USER_TYPES.HER]: COMPLIMENT_TYPES.FOR_HER,
}

export const Compliment = () => {
    const dispatch = useDispatch();
    const compliment = useSelector(state => state.compliments.compliment);
    const user = useSelector(state => state.user.currentUser);

    useEffect(() => {
        if (user && !compliment) {
            dispatch(getRandomCompliment({ type: typesMap[user.user_type] }));
        }
    }, [compliment, user, dispatch]);

    return (
        <section className="quote-section">
            <h1 className="header">Комплімент для тебе</h1>
            <blockquote className="quote">“{compliment?.text}”</blockquote>
        </section>
    )
}