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
  const numericId = parseInt(id); // ✅ normalize

  if (storedBookData.includes(numericId)) {
    alert("This ID already exists");
  } else {
    storedBookData.push(numericId);
    localStorage.setItem("readList", JSON.stringify(storedBookData));
  }
};

export { addToStoredDB, getStoredBook };
