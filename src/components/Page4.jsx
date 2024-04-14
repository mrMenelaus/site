import React from 'react';
import MyButton from './UI/MyButton';
import { useEffect } from 'react';
const Page = () => {
    useEffect(()=>{window.scrollTo(0,0)},[])
    return (
        <div className='container'>
            <div className="content">
                <h1 className='main_highlight'>
                    Методы решения задач
                </h1>
                <ol className='methods2'>
                     <li><span className="bold">Табличный метод (таблицы соответствий, истинности, совмещенные, кубические): </span>таблицы создают наглядность, прозрачность рассуждений, помогают сделать верные выводы.</li>
                     <li><span className="bold">Применение законов из алгебры логики:</span> вводятся обозначения для простых высказываний и преобразовываются в некую формулу.</li>
                     <li><span className="bold">Метод рассуждений:</span> подходит для решения простых задач с небольшим количеством объектов. Последовательное рассуждение над каждым условием задачи приводит к правильному выводу.</li>
                     <li><span className="bold">Черчение блок-схем:</span> способ, подходящий для решения задач на переливание, взвешивание. Рисуется схема, на которой отмечают последовательность действий и результат, полученный при их выполнении.</li>
                     <li><span className="bold">Графический метод:</span> подходит для решения задач на объединение или пересечение множеств. Самый популярный графический метод называется «Круги Эйлера». Нарисованная геометрическая схема наглядно показывает отношение между множествами.</li>
                     <li><span className="bold">Метод «математический бильярд»:</span> используется для решения задач на переливание жидкостей. Вычерчивается траектория движения бильярдного шара, который отталкивается от бортов стола в форме параллелограмма.</li>
                </ol>
            </div>
            <MyButton to="/page5">
                Примеры решения задач
            </MyButton>
        </div>
    );
};

export default Page;