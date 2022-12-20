// Найти форму добавления в DOM-дереве
const newNoteForm = document.querySelector('.js-add-note');

// Проверить, что HTML-элемент существует
if (newNoteForm) {
  // Перехватить событие отправки формы
  newNoteForm.addEventListener('submit', async (event) => {
    // Отменить стандартное поведение браузера при отправке формы
    event.preventDefault();

    // ОТМЕНИЛИ: Стандартное поведение при отправке формы
    // 1. сформировать и отправить запрос по method и action формы
    // 2. обработать ответ и перезагрузить страницу

    // ЧТО ХОТИМ:
    // 1. сформировать и отправить запрос

    // формируем запрос — работа с DOM-деревом
    // event.target — элемент, инициировавший событие
    const method = event.target.method; // POST
    const url = event.target.action; // /notes
    const title = event.target.title.value;
    const body = event.target.body.value;
    const requestBody = JSON.stringify({ title, body }); // сериализация данных перед отправкой

    // вариант с деструктуризацией
    // const {
    //   method,
    //   action: url, // переименование переменной
    //   title: { value: title }, // вложенность + переименование
    //   body: { value: body }, // вложенность + переименование
    // } = event.target;

    // отправляем запрос
    // TODO try/catch
    const response = await fetch(url, {
      method,
      body: requestBody,
      headers: { 'Content-Type': 'application/json' },
    });

    // 2. обработать ответ и обновить страницу БЕЗ перезагрузки
    // если ответ в формате HTML
    // прочесть тело ответа в формате HTML
    // TODO try/catch
    const html = await response.text();
    // обновить страницу без перезагрузки — работа с DOM-деревом
    const notesContainer = document.querySelector('.js-notes');
    notesContainer.innerHTML += html;

    // если ответ в формате JSON
    // прочесть тело ответа в формате JSON
    // const data = await response.json();
    // обновить страницу без перезагрузки
  });
}

// Удаление заметок
// Делегирование событий
const notesContainer = document.querySelector('.js-notes');

if (notesContainer) {
  notesContainer.addEventListener('click', async (event) => {
    const isDeleteBtn = event.target.classList.contains('js-delete');

    if (!isDeleteBtn) return;

    event.preventDefault();
    const noteItem = event.target.closest('.js-note');
    const noteId = noteItem.dataset.id;

    // TODO try/catch
    const response = await fetch(`/notes/${noteId}`, {
      method: 'DELETE',
    });

    if (response.status === 204) {
      noteItem.remove();
    }
  });
}
