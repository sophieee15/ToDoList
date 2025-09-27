import { useState } from "react";//импортируем хук/функцию из реакт для хранения данных в памяти и обновления экрана при изменении данных
import "./App.css"
function App () {// главная  функция для создания приложения
const [tasks, setTasks] = useState ([]);//функция  для списка задач/массива и обновления списка , usestate[] изначально список пуст
const [text, setText] = useState ('');//функция  для ввода текста и обновления
  const addTask = () => {// функция для добавление  новых задач
    if (text.trim() === '') return; //если поле пустое только пробелы
    setTasks([text, ...tasks]);//берем старые задачи из старого массива и добавляем новые(создаем новый массив)
    setText('');//потом очищаем поле ввода
  };
  const deleteTask = (indexToDelete) => { //удаление задачи по номеру
    setTasks(tasks.filter((_, index)=> index !== indexToDelete));
  };
return ( //все что видим на экране
  <div style ={{margin : "50px" }}>   
    <h1>TO-DO LIST</h1> 
   <input  
    type="text" 
    value={text} //значение поля всегда берется из текста 
    onChange={(e) => setText(e.target.value)}//  срабатывает при каждом изменение текста и печати в поле ввода  т.е обновляет  состояния
    onKeyDown={(e) => {if (e.key === 'Enter') addTask (); }} //срабатывает при нажатии клавиши
  placeholder="Введите задачу" //подсказка в поле 
    />
    <button onClick={addTask}>Добавить задачу</button> 
    <ul> 
      {tasks.map ((task,index) => ( //пробегается по массиву tasks и возвращает новый  
        <li key={index}>{task} 
        <button onClick={() => deleteTask(index)}>❌</button>
        </li> //создает элемент списка 
      ))}
    </ul>
  </div>
);
}
export default App;


