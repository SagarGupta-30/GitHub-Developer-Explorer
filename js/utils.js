(function () {
// utils.js

/*
 Sort Repositories
*/
function sortRepositories(repos, type){

    const copy = [...repos];

    if(type === "stars"){

        copy.sort(
            (a,b) =>
            b.stargazers_count -
            a.stargazers_count
        );

    }

    else if(type === "latest"){

        copy.sort(
            (a,b) =>
            new Date(b.updated_at) -
            new Date(a.updated_at)
        );

    }

    else if(type === "oldest"){

        copy.sort(
            (a,b) =>
            new Date(a.updated_at) -
            new Date(b.updated_at)
        );

    }

    return copy;
}

/*
 Filter Repositories
*/
function filterRepositories(
    repos,
    searchText,
    language
){

    return repos.filter((repo)=>{

        const matchesText =
            repo.name
                .toLowerCase()
                .includes(
                    searchText.toLowerCase()
                );

        const matchesLanguage =
            !language ||
            repo.language === language;

        return (
            matchesText &&
            matchesLanguage
        );

    });

}

/*
 Format Date
*/
function formatDate(dateString){

    return new Date(
        dateString
    ).toLocaleDateString();

}

/*
 Format Numbers
*/
function formatNumber(number){

    return number.toLocaleString();

}

/*
 Unique Languages
*/
function getUniqueLanguages(repos){

    const languages =
        repos
            .map(
                repo => repo.language
            )
            .filter(Boolean);

    return [...new Set(languages)];
}

/*
 Global Object
*/

window.Utils = {

    sortRepositories,
    filterRepositories,
    formatDate,
    formatNumber,
    getUniqueLanguages

};
})();