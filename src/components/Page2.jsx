import React from 'react';
import MyButton from './UI/MyButton';
import { useEffect } from 'react';
const Page = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    return (
        <div className='container'>
            <div className="content">
                <h1 className='main_highlight'>
                    Виды логических операций
                </h1>
                <div className="content_wrapper">
                    <h2>
                        Отрицание (инверсия, логическое НЕ)
                    </h2>
                    <p>
                        Высказыванию ставится в соответствие новое высказывание, значение которого противоположно исходному.
                    </p>
                    <div className="table_responsive">
                        <table>
                            <caption>
                                Таблица истинности
                            </caption>
                            <thead>
                                <tr>
                                    <th>
                                        A
                                    </th>
                                    <th>
                                        не A
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
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
                </div>
                <div className="content_wrapper">
                    <h2>Конъюнкция (логическое умножение, логическое И)</h2>
                    <h3>Обозначается  —  ∧ ; •; &.</h3>
                    <p>
                        Высказывание истинно тогда и только тогда, когда истинны оба исходных высказывания.
                    </p>
                    <div className="table_responsive">
                        <table>
                            <caption>
                                Таблица истинности
                            </caption>
                            <thead>
                                <tr>
                                    <th>
                                        A
                                    </th>
                                    <th>
                                        B
                                    </th>
                                    <th>
                                        A и B
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
                                        0
                                    </th>
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
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="content_wrapper">
                    <h2>Дизъюнкция (логическое сложение, логическое ИЛИ)</h2>
                    <h3>Обозначается  —  ∨;  +; ǀǀ.</h3>
                    <p>
                        Высказывание ложно тогда и только тогда, когда ложны оба исходных высказывания.
                    </p>
                    <div className="table_responsive">
                        <table>
                            <caption>
                                Таблица истинности
                            </caption>
                            <thead>
                                <tr>
                                    <th>
                                        A
                                    </th>
                                    <th>
                                        B
                                    </th>
                                    <th>
                                        A и B
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


                <p>Рассмотрим новые логические операции.</p>
                <div className="content_wrapper">
                    <h2>
                        Импликация
                    </h2>
                    <h3>
                        Обозначается — ⇒; →; ⊃.
                    </h3>
                    <p>
                        Логическая операция, ставящая в соответствие двум высказываниям новое, являющееся ложным тогда и только тогда, когда первое высказывание (посылка) истинно, а второе (следствие) — ложно, называется импликацией (от лат. implicatio — сплетение, тесная связь) или логическим следованием.
                    </p>
                    <div className="table_responsive">
                        <table>
                            <caption>
                                Таблица истинности
                            </caption>
                            <thead>
                                <tr>
                                    <th>
                                        A
                                    </th>
                                    <th>
                                        B
                                    </th>
                                    <th>
                                        A → B
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
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
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>
                        В разговорной речи импликации соответствуют предложения, содержащие связку «если…, то». Как правило, эту связку мы используем, когда хотим показать зависимость одного события от другого.
                        Импликацию можно заменить на выражение, использующее ранее изученные операции НЕ и ИЛИ:
                    </p>
                </div>

                <div className='content_wrapper'>
                    <h2>
                        Строгая дизъюнкция
                    </h2>
                    <h3>
                        Обозначается — ⊕.
                    </h3>
                    <p>
                        Логическая операция, ставящая в соответствие двум высказываниям новое, являющееся истинным тогда и только тогда, когда только одно из двух высказываний истинно, называется строгой (исключающей) дизъюнкцией.
                    </p>

                    <div className="table_responsive">
                        <table>
                            <caption>
                                Таблица истинности
                            </caption>
                            <thead>
                                <tr>
                                    <th>
                                        A
                                    </th>
                                    <th>
                                        B
                                    </th>
                                    <th>
                                        A ⊕ B
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
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
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
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
                    <p>
                        В русском языке строгой дизъюнкции соответствует связка «либо». Например, в пословице «Либо пан, либо пропал», выполнение обоих условий одновременно невозможно. В отличие от обычной дизъюнкции в высказывании, содержащем строгую дизъюнкцию, мы утверждаем, что произойдет только одно событие.
                        Строгую дизъюнкцию можно представить через базовые операции следующим образом:
                    </p>
                    <p><span className="equation">A ⊕ B = <span className='overline'>A</span> · B + A · <span className='overline'>B</span></span></p>
                    <p>Чтобы доказать это равенство, достаточно для всех возможных комбинаций  и  вычислить значения выражения, стоящего в правой части равенства, и сравнить их со значениями выражения   для тех же исходных данных.</p>
                </div>
                <div className="content_wrapper">
                    <h2>
                        Эквиваленция
                    </h2>
                    <h3>
                        Обозначается — ⇔; ≡; ↔.
                    </h3>
                    <p>
                        Логическая операция, ставящая в соответствие двум высказываниям новое, являющееся истинным, когда оба исходных высказывания истинны или оба исходных высказывания ложны, называется эквиваленцией или равнозначностью.
                    </p>
                    <div className="table_responsive">
                        <table>
                            <caption>
                                Таблица истинности
                            </caption>
                            <thead>
                                <tr>
                                    <th>
                                        A
                                    </th>
                                    <th>
                                        B
                                    </th>
                                    <th>
                                        A ⇔ B
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        0
                                    </th>
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
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                </tr>
                                <tr>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                    <th>
                                        1
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p>В разговорной речи эквивалентности соответствует связка «тогда и только тогда, когда», а в математике — «необходимо и достаточно».</p>
                </div>

            </div>
            <MyButton to="/page3">
                Составные логические операции
            </MyButton>
        </div>
    );
};

export default Page;