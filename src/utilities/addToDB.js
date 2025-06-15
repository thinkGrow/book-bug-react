const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem("readList");
  if (storedBookSTR) {
    return JSON.parse(storedBookSTR);
  } else {
    return [];
  }
};

const addToStoredDB = (id) => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    alert("This ID already exists");
  } else {
    storedBookData.push(id);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
  }
};


export { addToStoredDB }