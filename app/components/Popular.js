import React from 'react';
import PropTypes from 'prop-types';
import { fetchPopularRepos } from './../utils/api';
import {
    FaUser,
    FaStar,
    FaCodeBranch,
    FaExclamationTriangle
} from 'react-icons/fa';

import Card from './Card';
import Loading from './Loading';
import Tooltip from './Tooltip';

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
    return (
        <ul className="flex-center">
            {languages.map((language, i) => (
                <li key={i}>
                    <button
                        className="btn-clear nav-link"
                        style={
                            language === selected
                                ? { color: 'rgb(187, 46, 31)' }
                                : null
                        }
                        onClick={() => {
                            onUpdateLanguage(language);
                        }}
                    >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    );
};

LanguagesNav.propTypes = {
    selected: PropTypes.string.isRequired,
    onUpdateLanguage: PropTypes.func.isRequired
};

const ReposGrid = ({ repos }) => {
    return (
        <ul className="grid space-around">
            {repos.map((repo, i) => {
                const {
                    owner,
                    name,
                    html_url,
                    stargazers_count,
                    forks,
                    open_issues
                } = repo;
                const { login, avatar_url } = owner;

                return (
                    <li key={html_url}>
                        <Card
                            header={`#${i + 1}`}
                            avatar={avatar_url}
                            href={html_url}
                            name={login}
                        >
                            <ul className="card-list">
                                <li>
                                    <Tooltip text="Github username">
                                        <FaUser
                                            color="rgb(255, 191, 116)"
                                            size={22}
                                        />
                                        <a href={`https://github.com/${login}`}>
                                            {login}
                                        </a>
                                    </Tooltip>
                                </li>
                                <li>
                                    <FaStar
                                        color="rgb(255, 215, 0)"
                                        size={22}
                                    />
                                    {stargazers_count.toLocaleString()} stars
                                </li>
                                <li>
                                    <FaCodeBranch
                                        color="rgb(129, 195, 245)"
                                        size={22}
                                    />
                                    {forks.toLocaleString()} forks
                                </li>
                                <li>
                                    <FaExclamationTriangle
                                        color="rgb(241, 138, 147)"
                                        size={22}
                                    />
                                    {open_issues.toLocaleString()} open
                                </li>
                            </ul>
                        </Card>
                    </li>
                );
            })}
        </ul>
    );
};

ReposGrid.propTypes = {
    repos: PropTypes.array.isRequired
};

export default class Popular extends React.Component {
    state = {
        selectedLanguage: 'All',
        repos: {},
        error: null
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = async selectedLanguage => {
        this.setState({
            selectedLanguage: selectedLanguage,
            error: null
        });

        if (!this.state.repos[selectedLanguage]) {
            try {
                const selectedRepo = await fetchPopularRepos(selectedLanguage);
                const oldReposState = this.state.repos;

                const newReposeState = {
                    ...oldReposState,
                    [selectedLanguage]: selectedRepo
                };

                this.setState({ repos: newReposeState });
            } catch (err) {
                console.log('--updateLanguage Error', err);
                this.setState({ error: 'There was an error fetching repos' });
            }
        }
    };

    isLoading = () => {
        const { repos, error, selectedLanguage } = this.state;

        return !repos[selectedLanguage] && error === null;
    };

    render() {
        const { selectedLanguage, repos, error } = this.state;
        return (
            <>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />
                {this.isLoading() && <Loading text="Fetching Repos" />}
                {error && <p className="error center-text">{error}</p>}

                {repos[selectedLanguage] && (
                    <ReposGrid repos={repos[selectedLanguage].items} />
                )}
            </>
        );
    }
}
