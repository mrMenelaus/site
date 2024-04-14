import React from 'react';
import Modal from './UI/Modal';
const Ex = ({visible,setVisible}) => {
    return (
        <Modal visible={visible} setVisible={setVisible} header={"О записи ответа"}>
            <div className="content">
                <p>В ответе напишите буквы<span className="equation">x, y, z, w</span> в том порядке, в котором идут соответствующие им столбцы (сначала — буква, соответствующая первому столбцу; затем — буква, соответствующая второму столбцу, и т. д.). Буквы в ответе пишите подряд, никаких разделителей между буквами ставить не нужно.</p>
                <div className="content_wrapper">
                    <p>
                        <span className="bold">Пример.</span> Пусть задано выражение<span className="equation">x → y</span>, зависящее от двух переменных <span className="equation">x</span> и<span className="equation">y</span>, и фрагмент таблицы истинности:
                    </p>
                                <div className="table_responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Переменная 1</th>
                                                <th>Переменная 2</th>
                                                <th>Функция</th>
                                            </tr>
                                            <tr>
                                                <th>???</th>
                                                <th>???</th>
                                                <th>F</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>0</th>
                                                <th>1</th>
                                                <th>0</th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                    <p>
                            Тогда первому столбцу соответствует переменная<span className="equation">y</span>, а второму столбцу соответствует переменная<span className="equation">x</span>. <span className="bold">В ответе нужно написать:</span><span className="equation">yx</span>.
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export default Ex;