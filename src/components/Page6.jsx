import React, { useEffect, useState } from 'react';
import Solve from './UI/Solve';
import Ex from './Ex';



const Page = () => {
    useEffect(() => { window.scrollTo(0, 0) }, [])
    const data = [
        {
            answer: "18",
            content: (
                <p>
                    Напишите наименьшее число X, для которого истинно высказывание: <span className="equation">(X &gt; 16) И НЕ (X нечетное)</span>.
                </p>
            )


        },
        {
            answer: 7,
            content: (
                <p>
                    Напишите целое число X, для которого истинно высказывание: <span className="equation">(X &lt; 8) И НЕ (X &lt; 7)</span>.
                </p>
            )
        },
        {
            answer: 6,
            content: (
                <p>
                    Напишите целое число X, для которого истинно высказывание: <span className="equation">НЕ (X &lt; 6) И (X &lt; 7)</span>.
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
        },
        {
            answer: "140",
            content: (
                <div className='content'>
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
                                        <th>Угол & Прямая</th>
                                        <th>20</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Прямая?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "2800",
            content: (
                <div className='content'>
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
                                            Крейсер | Линкор                                        </th>
                                        <th>
                                            4700
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Крейсер & Линкор</th>
                                        <th>600</th>
                                    </tr>
                                    <tr>
                                        <th>Крейсер</th>
                                        <th>2500</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Линкор?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "2500",
            content: (
                <div className='content'>
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
                                            фрегат & эсминец                                        </th>
                                        <th>
                                            500
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>фрегат | эсминец</th>
                                        <th>500</th>
                                    </tr>
                                    <tr>
                                        <th>эсминец</th>
                                        <th>2500</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Фрегат?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "1000",
            content: (
                <div className='content'>
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
                                            Пушкин
                                        </th>
                                        <th>
                                            3500
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Лермонтов</th>
                                        <th>2000</th>
                                    </tr>
                                    <tr>
                                        <th>Пушкин | Лермонтов</th>
                                        <th>4500</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Пушкин & Лермонтов?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "1500",
            content: (
                <div className='content'>
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
                                            фрегат | эсминец
                                        </th>
                                        <th>
                                            3000
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>фрегат</th>
                                        <th>2000</th>
                                    </tr>
                                    <tr>
                                        <th>эсминец</th>
                                        <th>2500</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">фрегат & эсминец?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "3300",
            content: (
                <div className='content'>
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
                                            Руда
                                        </th>
                                        <th>
                                            2200
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Уголь</th>
                                        <th>1300</th>
                                    </tr>
                                    <tr>
                                        <th>Руда & Уголь</th>
                                        <th>200</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Руда | Уголь?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "1100",
            content: (
                <div className='content'>
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
                                            Евгений | Онегин
                                        </th>
                                        <th>
                                            1700
                                        </th>
                                    </tr>
                                    <tr>
                                        <th>Евгений</th>
                                        <th>1600</th>
                                    </tr>
                                    <tr>
                                        <th>Онегин</th>
                                        <th>1200</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Какое количество страниц (в тысячах) будет найдено по запросу <span className="bold">Евгений & Онегин?</span></p>
                    </div>
                    <p>Считается, что все запросы выполнялись практически одновременно, так что набор страниц, содержащих все искомые слова, не изменялся за время выполнения запросов.</p>
                </div>
            )


        },
        {
            answer: "zywx",
            content: (
                <div>
                    Логическая функция F задаётся выражением <span className="equation">((x ≡ ¬y) → (y ∧ ¬z)) ∨ (z ∧ ¬w)</span>.
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
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
                                    <th>
                                        
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
                                    <th>
                                        
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
                                        
                                    </th>
                                    <th>
                                        
                                    </th>
                                    <th>
                                        0
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
            answer: "zywx",
            content: (
                <div>
                    Логическая функция F задаётся выражением <span className="equation">(x → y) ∨ ¬(w → z)</span>.
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
                                    <th>
                                        0
                                    </th>
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
                                        0
                                    </th>
                                    <th>
                                        0
                                    </th>
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