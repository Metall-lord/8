  let user = {
    name: "John",
    age: 30
  };
  const isPlainObject = (element) => {return typeof element === 'object' && !Array.isArray(element) && element !== null;}
  console.log(isPlainObject({age: 1}))
  const makePairs2 = (object) => Object.keys(object).map((el) => [el, object[el]]);
  const data = { a: 1, b: 2 };
  console.log(makePairs2(data));   [['a', 1], ['b', 2]]
  const listArticles = [
    { title: "Статья 7", likes: 15 },
    { title: "Статья 1", likes: 10 },
    { title: "Статья 5", likes: 3 },
    { title: "Статья 3", likes: 20 }
  ];
  listArticles.sort((article1, article2) => {
    return article1.likes < article2.likes ? -1 : article1.likes > article2.likes ? 1 : 0;
  });
  const persons = [
    { name: 'John', age: 25 },
    { name: 'Leonardo', age: 15 },
    { name: 'Kristina', age: 12 }
  ];
  const newPersons = persons.filter((value) => value.age >= 18);
  console.log(newPersons);
  let objects1 = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
  ]
  let objects = [
    { name: 'Василий',
      surname: 'Васильев' },
    { name: 'Иван',
      surname: 'Иванов' },
    { name: 'Пётр',
      surname: 'Петров' }
  ];

  function filterObjValues(objects, key, value) {
    const result = [];
    for (let i = 0; i < objects.length; i++) {
      const obj = objects[i];
      if (obj[key] === value) result.push(obj);
    }
    return result;
  }
  const filteredArray = filterObjValues(objects, 'name', 'Иван');