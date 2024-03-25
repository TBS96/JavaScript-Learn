// Other than DBs like NoSQL, MySQL, MongoDB etc, browsers can also store data and works as databases. These are known as  Local Storage and Session Storage. This can be accessed from Inspect -> Application tab -> Storage -> Local storage & Session Storage.

const addToLocalStrg = () => {
    localStorage.setItem("Name","Prantik");
};

const addToSessionStrg = () => {
    sessionStorage.setItem("Age", "28");
}

const delFromLocalStrg = () => {
    localStorage.removeItem("Name");
}

const delFromSessionStrg = () => {
    sessionStorage.removeItem("Age");
}

const getDataFromLocalStrg = () => {
    console.log(localStorage.getItem("Name"));
}

const clearData = () => {
    localStorage.clear();
}