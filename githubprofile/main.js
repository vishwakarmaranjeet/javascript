const API_URL = `https://api.github.com/users/`;

const userProfile = document.getElementById("user_profile");
const form = document.getElementById("form");
const search = document.getElementById("search");

const getUser = async (username) => {
  try {
    const response = await fetch(API_URL + username);
    const data = await response.json();
    console.log("User Data-->", data);
    createUserCard(data);
    getRepos(username);
  } catch (e) {
    console.log("Error has occured", e);
  }
};

const getRepos = async (username) => {
  try {
    const response = await fetch(API_URL + username + "/repos");
    const data = await response.json();
    addReposToCard(data);
  } catch (e) {
    console.log("Error has occured", e);
  }
};

const createUserCard = (user) => {
  const cardHTML = `<section class="pt-16 bg-blueGray-50">
    <div class="w-full px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words bg-grey-300 w-full mb-6 shadow-xl rounded-lg mt-16"
      >
        <div class="px-6">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 flex justify-center">
              <div class="relative">
                <img
                  src="${
                    user.avatar_url ||
                    "https://avatars.githubusercontent.com/u/12077657?v=4"
                  }"
                  class="shadow-xl rounded-full align-middle border-none -mt-16 h-40"
                />
              </div>
            </div>
            <div class="w-full px-4 text-center mt-2">
              <div class="flex justify-center py-4 lg:pt-4 pt-8">
                <div class="mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                  >
                    ${user.followers || "0"}
                  </span>
                  <span class="text-sm text-blueGray-400">Followers</span>
                </div>
                <div class="mr-4 p-3 text-center">
                  <span
                    class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
                  >
                    ${user.following || "0"}
                  </span>
                  <span class="text-sm text-blueGray-400">Following</span>
                </div>
                <div class="lg:mr-4 p-3 text-center">
                <span
                class="text-xl font-bold block uppercase tracking-wide text-blueGray-600"
              >
                ${user.public_repos || "0"}
              </span>
              <span class="text-sm text-blueGray-400">Repos</span>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-2">
            <h3
              class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
            >
             ${user.name || "User Not Found"}
            </h3>
            <div
              class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"
            >
              <i
                class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"
              ></i>
              ${user.location || "Location not found"}
            </div>
            
          </div>
          <div
            class="mt-10 py-10 border-t border-blueGray-200 text-center"
          >
            <div class="flex flex-wrap justify-center">
              <div class="w-full px-4">
                <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                 ${user.bio || "No Bio found"}
                </p>
              </div>
              <div id="repos"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  userProfile.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");
  console.log(reposEl);
  repos.forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add(`repo`);
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
};

getUser("bradtraversy");

const searchUser = () => {
  const user = document.getElementById("username").value;
  if (user.toLowerCase()) {
    getUser(user);
    document.getElementById("username").value = "";
  }
};

document.querySelector("#search").addEventListener("click", () => {
  searchUser();
});

document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  searchUser();
});
