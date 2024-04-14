import React from 'react';
import { useState } from 'react';
import Ex from './Ex';
import MyButton from './UI/MyButton';
import Example from './UI/Example';
import { useEffect } from 'react';
import Circle from './UI/Circle';

const Page = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
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

        },
        {
            answer: 20,
            condition: (
                <div>
                    <p>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» — символ «&».</p>
                    <div className="content_wrapper">
                        <p>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.</p>
                        <div className="table_responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Запрос
                                        </th>
                                        <th>
                                            Найдено страниц, тыс
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            Угол | Прямая
                                        </th>
                                        <th>
                                            180
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Угол</th>
                                        <th>60</th>
                                    </tr>
                                    <tr>
                                        <th>Прямая</th>
                                        <th>140</th>
                                    </tr>
                                </tbody>




                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Угол & Прямая?</span></p>
                        <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                    </div>
                </div>
            ),
            desition: (
                <div>
                    <Circle />
                    <p>Представим таблицу в виде кругов Эйлера. Пусть Угол — круг 1, Прямая — круг 3. Тогда задача — найти количество элементов N в области 2: N2. По таблице известно:</p>
                    <p>N1 + N2 + N3 = 180 (1),</p>
                    <p>N1 + N2 = 60 (2),</p>
                    <p>N2 + N3 = 140 (3).</p>

                    Подставим второе уравнение в первое и найдем N3: N3 = 180 - 60 = 120. Таким образом, по запросу Угол & Прямая будет найдено N2 = 140 - 120 = 20 тысяч страниц.

                </div>
            )
        },
        {
            answer: 570,
            condition: (









                <div>
                    <p>В языке запросов поискового сервера для обозначения логической операции «ИЛИ» используется символ «|», а для обозначения логической операции «И» — символ «&».</p>
                    <div className="content_wrapper">
                        <p>В таблице приведены запросы и количество найденных по ним страниц некоторого сегмента сети Интернет.</p>
                        <div className="table_responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Запрос
                                        </th>
                                        <th>
                                            Найдено страниц, тыс
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>
                                            Рыбак | Рыбка
                                        </th>
                                        <th>
                                            780
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Рыбак & Рыбка</th>
                                        <th>50</th>
                                    </tr>
                                    <tr>
                                        <th>Прямая</th>
                                        <th>140</th>
                                    </tr>
                                </tbody>




                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Рыбка?</span></p>
                        <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                    </div>
                </div>
            ),
            desition: (
                <div>
                    <Circle />
                    
                    
                    
                    

                    Подставим второе уравнение в первое и найдем N3: N3 = 780 − 260 = 520. Таким образом, по запросу Рыбка будет найдено N2 + N3 = 50 + 520 = 570 тысяч страниц.

                    <p>Представим таблицу в виде кругов Эйлера. Пусть Рыбак — круг 1, Рыбка — круг 3. Тогда задача — найти количество элементов N в областях 2 и 3: N2 + N3. По таблице известно:</p>
                    <p>N1 + N2 + N3 = 780(1),</p>
                    <p>N1 + N2 = 260 (2),</p>
                    <p>N2 = 50.</p>

                    Подставим второе уравнение в первое и найдем N3: N3 = 180 - 60 = 120. Таким образом, по запросу Угол & Прямая будет найдено N2 = 140 - 120 = 20 тысяч страниц.

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