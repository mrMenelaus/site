import React from 'react';
import { useState } from 'react';
import Ex from './Ex';
import MyButton from './UI/MyButton';
import Example from './UI/Example';

const Page = () => {
    const data = [
        {
            answer: 19,
            condition: (
                <p>
                    Напишите наибольшее целое число x, для которого истинно высказывание:
                    <span className="equation">НЕ (X &lt;= 15) И (X &lt; 20)</span>.
                </p>
            ),
            desition: (
                <p>
                    Запишем выражение в виде <span>(X &gt; 15) И (X &lt; 20). </span>
                    Значит, наибольшее число, для которого высказывание будет истинным — 19.
                </p>
            )

        },
        {
            answer: 7,

            condition: (
                <div>
                    Напишите число X, для которого истинно высказывание:
                    <span className="equation">(X &lt; 8) И НЕ (X &lt; 7)</span>.
                </div>
            ),
            desition: (
                <div>
                    Логическое «И» истинно тогда, когда истинны оба высказывания. Запишем выражение в виде
                    (X &lt; 8) И (X ≥ 7).
                    Значит, число, для которого высказывание будет истинным — 7.
                </div>
            )

        },
        {
            answer: 19,

            condition: (
                <div>
                    Логическая функция F задаётся выражением <span className="equation">(x ∨ y) → (z ≡ x)</span>.
                    Дан частично заполненный фрагмент, содержащий неповторяющиеся строки таблицы истинности функции F.
                    Определите, какому столбцу таблицы истинности соответствует каждая из переменных x, y, z.

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
                                        F
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th></th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <p onClick={show} className='hint'>Как записать ответ?</p>



                </div>
            ),
            desition: (
                <div>
                    Данная импликация принимает значение 0 тогда и только тогда, когда
                    Пусть x = 0, тогда y = z = 1. В первой строке нет двух единиц, значит, x = 1, и эта переменная находится в первом столбце. Тогда первая строка имеет вид 1 0 0.
                    Вторая строка должна отличаться от первой, поэтому она имеет вид 1 0 1. Рассмотрим два варианта:
                    <div className="table_responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>x</th>
                                    <th>y</th>
                                    <th>z</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>0</th>
                                    <th>0</th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th>0</th>
                                    <th>1</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="table_responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>x</th>
                                    <th>z</th>
                                    <th>y</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>0</th>
                                    <th>0</th>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <th>0</th>
                                    <th>1</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    Первый вариант не удовлетворяет системе (*), а второй удовлетворяет.
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
                    Примеры решения задач
                </h1>
                {
                    data.map(({ answer, desition, condition }, index) => (
                        <Example answer={answer} number={index + 1} key={index} desition={desition} condition={condition} />
                    )
                    )
                }
            </div>
            <MyButton to="/page6">
                Решение задач
            </MyButton>
        </div>
    );
};

export default Page;