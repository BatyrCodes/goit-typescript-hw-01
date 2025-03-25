import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  const response = await axios.get<T>(url);
  return response.data;
}

interface User {
  id: number;
  name: string;
}

async function getUser() {
  const user = await fetchData<User>("https://api.example.com/user/1");
  console.log(user.id, user.name);
}
