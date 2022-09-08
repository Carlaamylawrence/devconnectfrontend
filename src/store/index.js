import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
    users: null,
    project: null,
    projects: null,
    asc: true,
    jwt: null,
    // url: "https://yourdevconnect.herokuapp.com/users",
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
    sortUsersByFullname: (state) => {
      state.users = state.users.sort((a, b) => {
        // return a.number - b.number;
        if (a.fullname < b.fullname) {
          return -1;
        }
        if (a.fullname > b.fullname) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.users.reverse();
      }
      state.asc = !state.asc;
    },
    sortProjectsByTitle: (state) => {
      state.projects = state.projects.sort((a, b) => {
        // return a.number - b.number;
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      if (!state.asc) {
        state.projects.reverse();
      }
      state.asc = !state.asc;
    },
  },
  actions: {
    //USERS
    // GET SINGLE USER
    getUser: async (context, id) => {
      fetch("http://localhost:3050/users/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setUser", data));
      // .then((json) => context.commit("setUser", json))
      // .catch((err) => console.log(err.message));
    },

    // GET ALL USERS
    getUsers: async (context) => {
      // fetch("https://xcjewels.herokuapp.com/users")
      fetch("http://localhost:3050/users")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    // LOGIN
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

    // REGISTER AS DEV
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

    // REGISTER AS CLIENT
    clientRegister: async (context, user) => {
      // fetch("https://xcjewels.herokuapp.com/users/register", {
      fetch("http://localhost:3050/users/registerclient", {
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

    // DELETE A USER
    deleteUser: async (context, user) => {
      fetch("http://localhost:3050/users/" + user.id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": user.token,
        },
      })
        .then((response) => response.json())
        .then((json) => context.dispatch("getUsers"));
    },

    // UPDATE USER INFO
    updateUserInfo: async (context, user) => {
      const {
        fullname,
        email,
        password,
        experience,
        avatar,
        bio,
        location,
        availability,
        portUrl,
        githubUrl,
        userRole,
      } = user;
      fetch("http://localhost:3050/users/" + user.id, {
        method: "PATCH",
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          experience: experience,
          avatar: avatar,
          bio: bio,
          location: location,
          availability: availability,
          portUrl: portUrl,
          githubUrl: githubUrl,
          userRole: userRole,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": user.token,
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setUser", json));
    },
    // PROJECTS
    // SHOW ALL OF EM PROJECTS
    getProjects: async (context) => {
      fetch("http://localhost:3050/projects")
        .then((response) => response.json())
        .then((json) => context.commit("setProjects", json));
    },

    // SHOW ONE PROJECT
    getProject: async (context, id) => {
      console.log(id);
      fetch("http://localhost:3050/projects/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProject", data);
        });
    },

    // ADD A PROJECT
    addProject: async (context, project) => {
      fetch("http://localhost:3050/projects", {
        method: "POST",
        body: JSON.stringify(project),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": project.token,
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setProject", json));
    },
    // DELETE A PROJECT
    deleteProject: async (context, project) => {
      fetch("http://localhost:3050/projects/" + project.id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": project.token,
        },
      })
        .then((response) => response.json())
        .then((json) => context.dispatch("getProjects"));
    },
    // UPDATE A PROJECT
    updateProject: async (context, project) => {
      console.log(project);
      const { title, description, type, tech, email, postedBy } = project;
      fetch("http://localhost:3050/projects/updateitem/" + project.id, {
        method: "PATCH",
        body: JSON.stringify({
          title: title,
          description: description,
          type: type,
          tech: tech,
          email: email,
          postedBy: postedBy,
          id: project.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": project.token,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          context.commit("setProject", json);
          console.log(json);
        });
    },
  },

  modules: {},
});
