let age = +prompt(`How old are you ?`);
let city = prompt(`Where are you from `);
let sport = prompt(`What is your favorite sport ?`);
let sportmanVolleyball = `Мартиненко Олександр Євгенович`;
let sportmanFootball = `Лионе́ль Андре́с Ме́сси Куччитти́ни`;
let sportmanWeight = `Чумак Дмитро Віталійович`;

// ! Частина 1

if (city == `Лондон` || city == `Київ` || city == `Вашингтон`) {
  alert(`"Круто тобі ${age}! Ти живеш у столиці ${city} `);
  console.log(`"Круто тобі ${age}! Ти живеш у столиці ${city} `);
} else {
  if (city) {
    alert(`Тобі ${age}! Ти живеш у місті ${city} `);
    console.log(` Тобі ${age}! Ти живеш у місті ${city} `);
  } else {
  }
}

// ! Частина 2

if (sport === `Волейбол`) {
  alert(`"Круто! Хочеш стати як ${sportmanVolleyball}? `);
  console.log(`"Круто! Хочеш стати як ${sportmanVolleyball}?`);
} else {
  if (sport === `Футбол`) {
    alert(`"Круто! Хочеш стати як ${sportmanFootball}? `);
    console.log(`"Круто! Хочеш стати як ${sportmanFootball}?`);
  } else {
    if (sport === `Важка атлетика`) {
      alert(`"Круто! Хочеш стати як ${sportmanWeight}? `);
      console.log(`"Круто! Хочеш стати як ${sportmanWeight}?`);
    }
  }
}

if (city === null || city == ``) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) Місце`);
  console.log(`Шкода, що Ви не захотіли ввести свій(ю) Місце`);
}

if (age == 0 || age === false) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) рік `);
  console.log(`Шкода, що Ви не захотіли ввести свій(ю) рік `);
}

if (sport === null || sport == ``) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) улюблений вид спорту `);
  console.log(`Шкода, що Ви не захотіли ввести свій(ю) улюблений вид спорту `);
}
