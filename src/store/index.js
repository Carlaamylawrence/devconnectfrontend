import Swal from "sweetalert2";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    user: null,
    logUser: null,
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
    setLogUser: (state, logUser) => {
      state.logUser = logUser;
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
    Logout(state) {
      (state.logUser = ""), (state.token = "");
    },
  },
  actions: {
    //USERS
    // GET SINGLE USER
    getUser: async (context, id) => {
      fetch("https://yourdevconnect.herokuapp.com/users/" + id)
        // fetch("http://localhost:3050/users/" + id)
        .then((res) => res.json())
        .then((data) => context.commit("setUser", data));
      // .then((json) => context.commit("setUser", json))
      // .catch((err) => console.log(err.message));
    },

    // GET ALL USERS
    getUsers: async (context) => {
      fetch("https://yourdevconnect.herokuapp.com/users/devs")
        // fetch("http://localhost:3050/users/devs")
        .then((response) => response.json())
        .then((json) => context.commit("setUsers", json));
    },

    // LOGIN
    login: async (context, payload) => {
      const { email, password } = payload;
      fetch(`https://yourdevconnect.herokuapp.com/users/login`, {
        // fetch(`http://localhost:3050/users/login`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.commit("setJwt", data.token);
          context.commit("setLogUser", data.user);
          if (data.msg === "Email Not Found") {
            Swal.fire({
              title: "Oops!",
              text: "Email is incorrect",
              icon: "error",
            });
          } else if (data.msg === "Password Incorrect") {
            Swal.fire({
              title: "Oops!",
              text: "Password is incorrect",
              icon: "error",
            });
          } else {
            fetch("http://localhost:3050/users/user/verify", {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
                "x-auth-token": user.token,
              },
            })
              .then((res) => res.json())
              .then((user) => {
                console.log(user);
                context.commit("setUser", user);
                if (data.msg === "Login Successful") {
                  Swal.fire({
                    title: "Hooray",
                    text: "Login succesful",
                    icon: "success",
                  });
                }
              });
          }
        });
    },

    // REGISTER AS DEV
    devRegister: async (context, user) => {
      fetch("https://yourdevconnect.herokuapp.com/users/register", {
        // fetch("http://localhost:3050/users/register", {
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
      fetch("https://yourdevconnect.herokuapp.com/users/registerclient", {
        // fetch("http://localhost:3050/users/registerclient", {
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
    deleteUser: async (context, logUser) => {
      fetch("https://yourdevconnect.herokuapp.com/users/" + logUser.id, {
        // fetch("http://localhost:3050/users/" + logUser.id, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
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
      fetch("https://yourdevconnect.herokuapp.com/users/" + user.id, {
        // fetch("http://localhost:3050/users/" + user.id, {
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
      https: fetch("http://yourdevconnect.herokuapp.com/projects/")
        // https: fetch("http://localhost:3050/projects")
        .then((response) => response.json())
        .then((json) => context.commit("setProjects", json));
    },

    // SHOW ONE PROJECT
    getProject: async (context, id) => {
      console.log(id);
      fetch("http://yourdevconnect.herokuapp.com/projects/" + id)
        // fetch("http://localhost:3050/projects/" + id)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          context.commit("setProject", data);
        });
    },

    // ADD A PROJECT
    addProject: async (context, project) => {
      fetch("http://yourdevconnect.herokuapp.com/projects", {
        // fetch("http://localhost:3050/projects", {
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
      fetch("http://yourdevconnect.herokuapp.com/projects/" + project.id, {
        // fetch("http://localhost:3050/projects/" + project.id, {
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
      fetch(
        "http://yourdevconnect.herokuapp.com/projects/updateitem/" + project.id,
        {
          // fetch("http://localhost:3050/projects/updateitem/" + project.id, {
          //   method: "PATCH",
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
        }
      )
        .then((response) => response.json())
        .then((json) => {
          context.commit("setProject", json);
          console.log(json);
        });
    },
  },

  modules: {},
  plugins: [createPersistedState()],
});
