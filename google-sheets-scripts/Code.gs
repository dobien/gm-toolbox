function onEdit(e) {
  var sheet = e.source.getActiveSheet(); // Активный лист, где произошло редактирование

  if (e.range.getRow() > 1) {
    return; // Если строка больше 1, прекращаем выполнение скрипта
  }
  // Проверяем, что цвет фона изменяемой ячейки черный (#000000)
  var backgroundColor = e.range.getBackground();
  if (backgroundColor !== '#000000') {
    return; // Если цвет фона не черный, прекращаем выполнение скрипта
  }

  var searchString = 'recalc'; // Строка, которую ищем в формулах

  // Найдём все ячейки, где в формулах есть строка 'kkk'
  var ranges = sheet.createTextFinder(searchString)
                    .matchFormulaText(true) // Ищем только по тексту формул
                    .findAll(); // Найдём все совпадения

  if (ranges.length > 0) {
    // Пройдем по всем найденным диапазонам и пересчитаем их
    ranges.forEach(function(range) {
      var formula = range.getFormula(); // Получим формулу из текущей ячейки
      if (formula != '') // есть какой-то баг, что часто пытается обновить и затирает ячейку
      {
        range.clearContent(); // Очистим содержимое ячейки
        SpreadsheetApp.flush(); // Принудительный пересчёт для очистки
        range.setFormula(formula); // Вернем формулу, чтобы она пересчиталась
      }
    });
  }
}
