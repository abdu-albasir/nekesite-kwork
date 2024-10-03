import React from 'react';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate
import CardList from '../components/CardList/CardList';

const Home = () => {
    const navigate = useNavigate(); // Инициализируем useNavigate

    const goToForm = () => {
        navigate('/form'); // Перенаправляем на страницу с формой
    };

    return (
        <div>
            <div className="flex justify-center my-4">
                <button 
                    className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    onClick={goToForm} // Добавляем обработчик клика
                >
                    Заполнить анкету
                </button>
            </div>
            <CardList />
        </div>
    );
}

export default Home;
