# Проект: To-Do React App Demo by Alexander Novoselov
---

![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)&nbsp;
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-05122A?style=flat&logo=HTML5)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=CSS3&logoColor=1572B6)&nbsp;
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)&nbsp;
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)&nbsp;


### О проекте
Проект предназначен для отработки навыков программирования на языке JavaScript с использованием бибилиотеки React и представляет собой приложение для создания списка задач, которые надо выполнить.

Общий вид страницы:</br>
<img src="https://user-images.githubusercontent.com/97363077/178458775-f35b6785-b097-420d-92b8-fe6a216c016b.png" style="box-shadow: 2px 2px 10px gray;" width="600">

Перемещение выполненной задачи в список "Выполнено":</br>
<img src="https://user-images.githubusercontent.com/97363077/178458945-f4632ad1-c22a-4fa8-98e9-a92d9f7fde3b.png" style="box-shadow: 2px 2px 10px gray;" width="600">

После ввода новой задачи и нажатия кнопки "Сохранить":</br>
<img src="https://user-images.githubusercontent.com/97363077/178459605-16ee5076-93b7-4ad4-820f-ae663484b519.png" style="box-shadow: 2px 2px 10px gray;" width="600">

задача добавляется в конец списка "Задачи":</br>
<img src="https://user-images.githubusercontent.com/97363077/178459978-38c8ef82-e14e-44a4-900b-ddd56d8993e7.png" style="box-shadow: 2px 2px 10px gray;" width="600">


Приложение позволяет выполнять следующие действия:
- добавить новую задачу;
- отредактировать любую задачу из списка "Задачи";
- отметить задачу как выполненную, при этом отмеченная задача удаляется из списка "Задачи" и переносится в список "Выполнено", который появляется ниже;
- удалить любую задачу.

В работе приложения учитываются следующие условия:
- данное приложение не связано с бэкенд, список первых 4 задач подгружается из файла initial.js;
- новые добавляемые задачи не загружаются на сервер, хранятся только в локальных переменных, поэтому после перезагрузки страницы новые данные будут утеряны;
- если задача выполнена (расположена в списке "Выполнено"), то ее нельзя отредактировать. Для обеспечения возможности редактирования с задачи необходимо снять отмету "выполнено" (снять галочку), и после того. как она будет перенесена в список "Задачи", у нее появится иконка кнопки редактирования задачи, задачу можно будет отредактировать;
- при отсутствии в каком-либо списке вложенных в него задач, такой список скрывается со страница и появится только после добавления туда хотя бы одной задачи.

Функционал приложения чисто тренировочный, в этом варианте принято решение использовать два отдельных списка задач (toDoTasks и doneTasks), которые вынесены в соответствующие стейты. При простановке галочки "Выполнено" задача удаляется из одного списка и создается в другом. При снятии галочки происходит обратный перенос.

### Update 12.07.2022: 
- добавлена возможность добавлять введенную задачу по нажатию кнопки Enter, а не только кликом по кнопке
- добавлена блокировка кнопки добавления новой задачи при пустом поле ввода названия задачи
- добавлен функционал, обрезающий текст в названии задачи, если он длиннее отведенного пространства. В конце такой текст дополняется троеточием (...)
- изменено название списка ("Надо выполнить" -> "Задачи"). Исправлено описание данного списка в файле READ.me 

#### Планы на ближайшее будущее: 
- упростить код за счет использования одного общего списка, добавив дополнительное поле isChecked в объект задачи. В зависимости от значения данного поля будет производиться распределение по спискам "Задачи" и "Выполнено".
- добавить отображение счетчика задач (выполнено/всего задач)


[**Демо страницы на GitHub Pages**](https://alexander-nov.github.io/react-to-do/)
