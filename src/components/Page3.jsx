import React from 'react';
import MyButton from './UI/MyButton';
import { useEffect } from 'react';
const Page = () => {
    useEffect(()=>{window.scrollTo(0,0)},[])
    return (
        <div className='container'>
            <div className="content">
                <h1 className='main_highlight'>
                    Составные логические операции
                </h1>
                    <div className="content_wrapper">
                        <p><span className="look">Составное логическое высказывание</span> можно представить в виде логического выражения (формулы), состоящего из логических констант (0, 1), логических переменных, знаков логических операций и скобок.</p>
                        <p><span className="look">Для логического выражения справедливо:</span></p>
                        <ol className='methods'>
                            <li>
                                Всякая логическая переменная, а также логические константы (0,1) есть логическое выражение;
                            </li>
                            <li>
                                Если A — логическое выражение, то и <span className='overline'>A</span> — логическое выражение;
                            </li>
                            <li>
                                Если A и B — выражения, то связанные любой бинарной операцией, они также представляют собой логическое выражение.
                            </li>
                        </ol>
                    </div>

                    <div className="content_wrapper">
                        <p>При преобразовании или вычислении значения логического выражения логические операции выполняются в соответствии с их приоритетом:</p>
                        <ol className='methods'>
                            <li>отрицание;</li>
                            <li>конъюнкция;</li>
                            <li>дизъюнкция, строгая дизъюнкция;</li>
                            <li>импликация, эквиваленция.</li>
                        </ol>
                    </div>
                    <p>Операции одного приоритета выполняются в порядке их следования, слева направо. Как в математике, скобки меняют порядок выполнения операций.</p>
            </div>
            <MyButton to="/page4">
                Методы решения задач
            </MyButton>
        </div>
    );
};

export default Page;