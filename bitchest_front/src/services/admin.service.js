import axios from "axios";

export async function handleCreate(data) {
    console.log("create");
    axios.defaults.withCredentials = true;
    await axios.post('http://localhost:8000/api/createUser', data )
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
  
export async function handleUpdate(id, data) {
    console.log("update");
    axios.defaults.withCredentials = true;
    await axios.post(`http://localhost:8000/api/updateUser/${id}`, data )
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}
  
export async function handleDelete(id) {
    console.log("delete");
    axios.defaults.withCredentials = true;
    await axios.get(`http://localhost:8000/api/deleteUser/${id}`)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
  }