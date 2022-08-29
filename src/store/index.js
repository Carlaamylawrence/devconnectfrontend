import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: null,
    project: null,
    projects: null,
    asc: true,
    jwt: null,
    // url: "https://xcjewels.herokuapp.com",
  },
  getters: {},
  mutations: {
    setJwt: (state, jwt) => {
      state.jwt = jwt;
    },
    setUser: (state, user) => {
      state.user = user;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
    setProject: (state, project) => {
      state.project = project;
    },
    setProjects: (state, projects) => {
      state.projects = projects;
    },
  },
  actions: {
    getUsers: async (context) => {
      // fetch("https://xcjewels.herokuapp.com/users")
      fetch("http://localhost:3050/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    login: async (context, payload) => {
      // const { email, password } = payload;
      // fetch(`https://xcjewels.herokuapp.com/users/login`, {
      fetch(`http://localhost:3050/users/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setJwt", data.token);
          context.commit("setUser", data.user);
        });
    },

    devRegister: async (context, user) => {
      // fetch("https://xcjewels.herokuapp.com/users/register", {
      fetch("http://localhost:3050/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        // mode: cors,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.state.jwt = data.token;
          // context.commit("setUser", json));
        });
    },

    clientRegister: async (context, user) => {
      // fetch("https://xcjewels.herokuapp.com/users/register", {
      fetch("http://localhost:3050/users/register", {
        method: "POST",
        body: JSON.stringify(user),
        // mode: cors,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.state.jwt = data.token;
          // context.commit("setUser", json));
        });
    },
  },
  modules: {},
});
