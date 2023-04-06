import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
});

export async function getUser(username: string) {
  const response = await api.get(`/users/${username}`);
  return response.data;
}

export async function getRepo(username: string, repoName: string) {
  const response = await api.get(`/repos/${username}/${repoName}`);
  return response.data;
}
