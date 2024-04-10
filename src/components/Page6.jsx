import React, { useState } from 'react';
import Solve from './UI/Solve';
import Ex from './Ex';



const Page = () => {
    const data = [
        {
            answer: 7,
            content: (
                <p>
                    Напишите число X, для которого истинно высказывание: <span className="equation">(X &lt; 8) И НЕ (X &lt; 7)</span>.
                </p>
            )
        },
        {
            answer: 6,
            content: (
                <p>
                    Напишите число X, для которого истинно высказывание: <span className="equation">НЕ (X &lt; 6) И (X &lt; 7)</span>.
                </p>
            )
        },
        {
            answer: 7,
            content: (
                <p>
                    Для какого целого числа X ЛОЖНО высказывание: <span className="equation">(X &lt; 7) ИЛИ НЕ (X &lt; 6)</span>.
                </p>
            )
        },
        {
            answer: 8,
            content: (
                <p>
                    Напишите наименьшее целое число x, для которого истинно высказывание:
                    <span className="equation">НЕ (X &lt; 7) И (X четное)</span>.

                </p>
            )
        },
        {
            answer: 7,
            content: (
                <p>
                    Напишите наименьшее целое число x, для которого истинно высказывание:
                    <span className="equation">НЕ (X &lt; 6) И (X нечетное)</span>.
                </p>
            )
        },
        {
            answer: 19,
            content: (
                <p>
                    Напишите наибольшее целое число x, для которого истинно высказывание:
                    <span className="equation">НЕ (X &lt;= 15) И (X &lt; 20)</span>.
                </p>
            )
        },
        {
            answer: 6,
            content: (
                <p>
                    Напишите наибольшее целое число x, для которого истинно высказывание:
                    <span className="equation">НЕ (X &lt;= 3) И НЕ (X &gt;= 7)</span>.
                </p>
            )
        },
        {
            answer: "ywzx",
            content: (
                <div>
                    Логическая функция F задаётся выражением <span className="equation">((x → y ) ∧ (y → w)) ∨ (z ≡ ( x ∨ y))</span>.
                    Дан частично заполненный фрагмент, содержащий неповторяющиеся строки таблицы истинности функции F.
                    Определите, какому столбцу таблицы истинности соответствует каждая из переменных x, y, z, w.
                    <div className="table_responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Переменная 1
                                    </th>
                                    <th>
                                        Переменная 2
                                    </th>
                                    <th>
                                        Переменная 3
                                    </th>
                                    <th>
                                        Переменная 4
                                    </th>
                                    <th>
                                        Функция
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        F
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th></th>
                                    <th></th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th>
                                        1
                                    </th>
                                    <th></th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p onClick={show} className='hint'>Как записать ответ?</p>
                </div>
            )
        },
        {
            answer: "zyxw",
            content: (
                <div>

                    Логическая функция F задаётся выражением <span className="equation">((x → y ) ≡ (z → w)) ∨ (x ∧ w)</span>.
                    Дан частично заполненный фрагмент, содержащий неповторяющиеся строки таблицы истинности функции F.
                    Определите, какому столбцу таблицы истинности соответствует каждая из переменных x, y, z, w.
                    <div className="table_responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Переменная 1
                                    </th>
                                    <th>
                                        Переменная 2
                                    </th>
                                    <th>
                                        Переменная 3
                                    </th>
                                    <th>
                                        Переменная 4
                                    </th>
                                    <th>
                                        Функция
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        F
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th>1</th>
                                    <th></th>
                                    <th></th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th>
                                        1
                                    </th>
                                    <th>1</th>
                                    <th></th>
                                    <th>0</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p onClick={show} className='hint'>Как записать ответ?</p>
                </div>
            )
        },
        {
            answer: "wzyx",
            content: (
                <div>
                    Логическая функция F задаётся выражением <span className="equation">(z ∧ y) ∨ ((x → z ) ≡ (y → w))</span>.
                    Дан частично заполненный фрагмент, содержащий неповторяющиеся строки таблицы истинности функции F.
                    Определите, какому столбцу таблицы истинности соответствует каждая из переменных x, y, z, w.
                    <div className="table_responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        Переменная 1
                                    </th>
                                    <th>
                                        Переменная 2
                                    </th>
                                    <th>
                                        Переменная 3
                                    </th>
                                    <th>
                                        Переменная 4
                                    </th>
                                    <th>
                                        Функция
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        ???
                                    </th>
                                    <th>
                                        F
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>1</th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th></th>
                                    <th></th>
                                    <th>1</th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th></th>
                                    <th>1</th>
                                    <th>1</th>
                                    <th>0</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p onClick={show} className='hint'>Как записать ответ?</p>
                </div>
            )


        }
    ]

    const [visible, setVisible] = useState(false)

    function show() {
        setVisible(true)
    }

    return (
        <div className='container'>
            <Ex visible={visible} setVisible={setVisible} />
            <div className="content">
                <h1 className='main_highlight'>
                    Решение задач
                </h1>
                {
                    data.map(({ answer, content }, index) => (
                        <Solve answer={answer} number={index + 1} key={index}>
                            {content}
                        </Solve>
                    )
                    )
                }
            </div>
        </div>
    );
};

export default Page;