const id = 'YOUR_CLIENT ID';
const sec = 'YOUR_SECRET';
const params = `?client_id=${id}&client_secret=${sec}`;

const handleErrorMessage = (message, username) => {
    if (message === 'Not Found') {
        return `${username} doesnt exist`;
    }

    return message;
};

export const getProfile = async username => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}${params}`
        );
        const data = await response.json();

        if (data.message) {
            throw new Error(handleErrorMessage(data.message, username));
        }

        return data;
    } catch (err) {
        console.log('--getProfile there was an error', err);
    }
};

const getRepos = async username => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos${params}&per_page=100`
        );

        const data = await response.json();

        if (data.message) {
            throw new Error(handleErrorMessage(data.message, username));
        }

        return data;
    } catch (err) {
        console.log('--getRepos Error', err);
    }
};

const getStarCount = repos => {
    return repos.reduce((count, { stargazers_count }) => {
        return count + stargazers_count;
    }, 0);
};

const sortPlayers = players => {
    return players.sort((a, b) => b.score - a.score);
};

export const battle = async ([playerOne, playerTwo]) => {
    const results = await Promise.all([
        getUserData(playerOne),
        getUserData(playerTwo)
    ]);

    return sortPlayers(results);
};

const calculateScore = (followers, repos) => {
    return followers * 3 + getStarCount(repos);
};

const getUserData = async player => {
    const [profile, repos] = await Promise.all([
        getProfile(player),
        getRepos(player)
    ]);

    return {
        profile,
        score: calculateScore(profile.followers, repos)
    };
};

export const fetchPopularRepos = async language => {
    const endpoint = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
    );
    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        return data;
    } catch (err) {
        console.log('--fetchPopularRepos Error', err);
    }
};
