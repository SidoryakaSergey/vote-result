async function vote(option) {
  const id = 1; // ID ресурса
  const url = `https://676a7b4a863eaa5ac0de85a8.mockapi.io/radio/Survey/${id}`;

  // Получение текущих данных
  const response = await fetch(url);
  const survey = await response.json();
  console.log(survey);
  // Увеличение значения выбранного ответа
  // survey[option] += 1;
  survey["answer1"] = 12;
  survey["answer2"] = 43;
  survey["answer3"] = 25;
  survey["answer4"] = 9;
  survey["answer5"] = 8;
  survey["answer6"] = 177;

  // Обновление данных на сервере
  await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(survey),
  });

  console.log(`${option} updated to ${survey[option]}`);
}

// Пример голосования за answer1
vote("answer1");
