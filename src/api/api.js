import axios from "axios";
const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "843e19f2-2e0b-46ea-a34c-b4277f1a5196" },
  withCredentials: true,
});
export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  usersFollow(id) {
    return instance.post(`follow/${id}`);
  },
  usersUn_follow(id) {
    return instance.delete(`follow/${id}`);
  },
  getLogin() {
    return instance.get(`auth/me`).then((response) => response.data);
  },
  getProfile(id) {
    return instance.get(`profile/` + id);
  },
};
