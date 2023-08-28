1. Развернуть React-приложение с использованием create-react-app.
2.  Следуя правилам компонентного подхода, разбить Канбан-доску на смысловые блоки, сверстать интерфейс.
3.  Реализовать функционал, описанный ниже

Исходное состояние
Исходная Канбан-доска должна иметь 4 блока с задачами:

Backlog (задачи, которые требуют уточнения перед тем, как брать их в работу);
Ready (задачи, которые могут быть взяты в работу);
In progress (задачи, которые уже в работе);
Finished (законченные задачи).

1. Добавление новой задачи
   Первоначально каждая задача всегда размещается в бэклоге — для анализа. При клике на кнопку «+ Add card» в карточке Backlog должно появляться поле ввода в конце списка, между последней задачей и кнопкой. При этом кнопка «+ Add card» должна меняться на «Submit».
   Нельзя добавить в список задачу с отсутствующим названием. Если при нажатии «Submit» поле с названием пустое, в список ничего не добавляется.
2. Перемещение задач между списками
   Задачи для списка Ready берутся из Backlog. При клике на «+ Add card» в карточке Ready, в конце списка появляется дропдаун с задачами из списка Backlog. После клика на задачу из дропдауна она должна появиться в списке Ready последней, при этом эта задача должна быть удалена из Backlog.

Если Backlog пустой (в списке нет задач), то кнопка «+ Add card» в списке Ready должна быть неактивна, то есть при клике на неё ничего не происходит. Неактивной кнопке нужно назначить атрибут disabled. Активная и неактивная кнопки должны отличаться визуально: например, цветом и отсутствием cursor: pointer.

Остальные списки (In progress и Finished) работают по тому же принципу. Задачи для списка In progress берутся из Ready, а задачи для списка Finished — из In progress.
3. Сохранение внесенных изменений
   Любые изменения, внесенные в приложение (добавление новых задач, перемещение задач между списками, изменение описания задачи), должны сохраняться в localStorage.
   При загрузке приложения должны отображаться задачи, записанные в localStorage (или пустые списки, если в localStorage ничего нет). Если внести изменения и обновить страницу, то изменения должны сохраниться.

4. Детальная страница задачи
   Добавьте возможность перехода на отдельную страницу какой-либо задачи в списке при клике на её заголовок.
   Страница с задачей должна иметь URL, отличный от того, который используется для главной страницы. URL должен содержать id задачи. Пример: localhost:3000/tasks/12345 откроет страницу задачи с id 12345.
   На детальной странице задачи должны быть выведены название задачи и её описание. Если описания нет, вывести вместо него фразу "This task has no description".

Поле с описанием должно быть редактируемым. Детали реализации этой функции на ваше усмотрение. Можете реализовать возможность редактирования при клике на текст или добавить специальную кнопку, которая позволит отредактировать описание.

При клике на крестик в правом верхнем углу осуществляется переход обратно на главную страницу.
5. Вывод количества задач в футер
   В футере должно быть выведено количество активных и завершенных задач.
   Active tasks — отображает количество задач в списке Backlog.
   Finished tasks — отображает количество задач в списке Finished.
6. Выпадающее меню пользователя
   Реализуйте выпадающий список, который будет появляться при клике на блок в правом верхнем углу страницы — аватар пользователя со стрелкой.
   трелочка рядом с аватаром должна смотреть вверх, когда меню открыто, и вниз, когда меню закрыто.

При клике на пункты меню ничего не происходит, но нужно добавить выделение пунктов при наведении курсора (например, поменять цвет текста или добавить подчеркивание).

Требования к React
Интерфейс должен быть поделен на компоненты. Перед началом работы хорошенько обдумайте, какие компоненты вы будете использовать. Деление на компоненты должно быть логичным и оправданным.
После того как определитесь с делением на компоненты, подумайте о том, как верно организовать файловую структуру.
Следуйте принципам модульности (используйте export, import).
Возможно использование как классовых компонентов, так и функциональных.
Используйте Synthetic events для работы с событиями.
Для вывода разного состояния элементов в зависимости от действий пользователя (пример: раскрытое/свернутое меню пользователя) используйте условный рендеринг.
Для реализации отдельных страниц для каждой задачи и перехода между страницами используйте библиотеку react-router.
При написании кода старайтесь следовать принципам KISS (Keep It Short and Simple — не усложняй) и DRY (Don’t Repeat Yourself — не повторяйся).
Требования к верстке и CSS
Вёрстка должна соответствовать макету. Добиваться «pixel-perfect» соответствия не обязательно, но основные моменты должны быть соблюдены: цветовая гамма, шрифты, размеры, отступы.
Приложение должно корректно отображаться и на мобильных устройствах. Дизайн для мобильной версии вы можете найти в макете.
Соблюдайте семантическую вёрстку. В приложении должны присутствовать разделы <header>, <main> и <footer>. Кнопки должна быть реализованы элементом <button>, элементы дропдауна — списком <select> и так далее.
При наведении курсора на любые кликабельные элементы должен появляться cursor: pointer.
Учитывайте состояния кнопки «+ Add card» — активная и неактивная.
→ Если кнопка активна, её внешний вид должен соответствовать макету. При наведении она должна подсвечиваться (менять цвет), а курсор должен меняться на pointer.

→ Если кнопка неактивна (назначен атрибут disabled), её цвет должен отличаться от активного состояния, кнопка не должна реагировать на наведение курсора (цвет остаётся таким же, не появляется курсор pointer).

Можете использовать любой вариант подключения стилей на ваше усмотрение: общий файл стилей проекта, CSS-модули или специальные React-библиотеки для стилизации компонентов (например, Styled Components).
Использовать селекторы по тегу и id для задания стилей нельзя. Используйте классы.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
