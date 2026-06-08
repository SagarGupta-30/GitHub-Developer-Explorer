(function () {
// ui.js

const loader =
    document.getElementById("loader");

const errorCard =
    document.getElementById("errorCard");

const errorTitle =
    document.getElementById("errorTitle");

const errorMsg =
    document.getElementById("errorMsg");

const results =
    document.getElementById("results");

const profileCard =
    document.getElementById("profileCard");

const repoGrid =
    document.getElementById("repoGrid");

const repoCountBadge =
    document.getElementById("repoCountBadge");

const repoEmpty =
    document.getElementById("repoEmpty");

const searchError =
    document.getElementById("searchError");

const langFilter =
    document.getElementById("langFilter");


/*
 Loader
*/

function showLoader(){

    loader.hidden = false;

}

function hideLoader(){

    loader.hidden = true;

}


/*
 Error
*/

function showError(title,message){

    errorCard.hidden = false;

    results.hidden = true;

    errorTitle.textContent = title;

    errorMsg.textContent = message;

}

function hideError(){

    errorCard.hidden = true;

}


/*
 Results
*/

function showResults(){

    results.hidden = false;

}

function hideResults(){

    results.hidden = true;

}


/*
 Search Error
*/

function showSearchError(message){

    searchError.hidden = false;

    searchError.textContent = message;

}

function hideSearchError(){

    searchError.hidden = true;

}


/*
 Profile Card
*/

function renderProfile(user){

    profileCard.innerHTML = `

        <img
            src="${user.avatar_url}"
            class="profile-avatar"
        >

        <h2 class="profile-name">
            ${user.name || user.login}
        </h2>

        <p>
            @${user.login}
        </p>

        <p>
            Followers :
            ${user.followers}
        </p>

        <p>
            Following :
            ${user.following}
        </p>

        <p>
            Public Repositories :
            ${user.public_repos}
        </p>

    `;
}


/*
 Repository Cards
*/

function renderRepositories(repos){

    repoGrid.innerHTML = "";

    if(repos.length === 0){

        repoEmpty.hidden = false;

        repoCountBadge.textContent = 0;

        return;
    }

    repoEmpty.hidden = true;

    repoCountBadge.textContent =
        repos.length;

    repos.forEach((repo)=>{

        repoGrid.innerHTML += `

            <div class="repo-card">

                <h3>
                    ${repo.name}
                </h3>

                <p>
                    ${repo.description || "No description"}
                </p>

                <p>
                    ⭐ ${repo.stargazers_count}
                </p>

                <p>
                    🍴 ${repo.forks_count}
                </p>

                <p>
                    ${repo.language || "Unknown"}
                </p>

                <p>
                    Updated:
                    ${Utils.formatDate(repo.updated_at)}
                </p>

            </div>

        `;

    });

}


/*
 Language Filter
*/

function populateLangFilter(languages){

    langFilter.innerHTML =
        `<option value="">All Languages</option>`;

    languages.forEach((language)=>{

        langFilter.innerHTML += `

            <option value="${language}">
                ${language}
            </option>

        `;

    });

}


/*
 Global Object
*/

window.UI = {

    showLoader,

    hideLoader,

    showError,

    hideError,

    showResults,

    hideResults,

    renderProfile,

    renderRepositories,

    populateLangFilter,

    showSearchError,

    hideSearchError

};
})();