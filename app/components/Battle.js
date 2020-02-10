import React from 'react';
import {
    FaUserFriends,
    FaFighterJet,
    FaTrophy,
    FaTimesCircle
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ThemeConsumer } from './../context/theme';

const Instructions = () => {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <div className="instructions-container">
                        <h1 className="center-text header-lg">Instructions</h1>
                        <ol className="container-sm grid center-text battle-instructions">
                            <li>
                                <h3 className="header-sm">
                                    Enter two Githubusers
                                </h3>
                                <FaUserFriends
                                    className={`bg-${theme}`}
                                    color="rgb(255, 191, 116)"
                                    size={140}
                                />
                            </li>
                            <li>
                                <h3 className="header-sm">Battle</h3>
                                <FaFighterJet
                                    className={`bg-${theme}`}
                                    color="#727272"
                                    size={140}
                                />
                            </li>
                            <li>
                                <h3 className="header-sm">See the winners</h3>
                                <FaTrophy
                                    className={`bg-${theme}`}
                                    color="rgb(255, 215, 0)"
                                    size={140}
                                />
                            </li>
                        </ol>
                    </div>
                );
            }}
        </ThemeConsumer>
    );
};

class PlayerInput extends React.Component {
    state = {
        username: ''
    };

    handleSubmit = evt => {
        evt.preventDefault();

        const { onSubmit } = this.props;
        const { username } = this.state;

        onSubmit(username);
    };

    handleChange = evt => {
        this.setState({ username: evt.target.value });
    };

    render() {
        const { label } = this.props;
        const { username } = this.state;

        return (
            <ThemeConsumer>
                {({ theme }) => {
                    return (
                        <form
                            className="column player"
                            onSubmit={this.handleSubmit}
                        >
                            <label htmlFor="username" className="player-label">
                                {label}
                            </label>
                            <div className="row player-inputs">
                                <input
                                    type="text"
                                    id="username"
                                    className={`input-${theme}`}
                                    placeholder="Github username"
                                    autoComplete="off"
                                    value={username}
                                    onChange={this.handleChange}
                                />
                                <button
                                    className={`btn ${
                                        theme === 'dark'
                                            ? 'light-btn'
                                            : 'dark-btn'
                                    }`}
                                    type="submit"
                                    disabled={!username}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    );
                }}
            </ThemeConsumer>
        );
    }
}
PlayerInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

const PlayerPreview = ({ username, onReset, label }) => {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <div className="column player">
                        <h3 className="player-label">{label}</h3>
                        <div className={`row bg-${theme}`}>
                            <div className="player-info">
                                <img
                                    className="avatar-small"
                                    alt={`Avatar for Username ${username}`}
                                    src={`https://github.com/${username}.png?size=200`}
                                />
                                <a
                                    className="link"
                                    href={`https://github.com/${username}`}
                                >
                                    {username}
                                </a>
                            </div>
                            <button
                                className="btn-clear flex-center"
                                onClick={onReset}
                            >
                                <FaTimesCircle
                                    color="rgb(194, 57, 42)"
                                    size={26}
                                />
                            </button>
                        </div>
                    </div>
                );
            }}
        </ThemeConsumer>
    );
};

PlayerPreview.propTypes = {
    username: PropTypes.string.isRequired,
    onReset: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
};

export default class Battle extends React.Component {
    state = {
        playerOne: null,
        playerTwo: null
    };

    handleSubmit = (id, player) => {
        this.setState({ [id]: player });
    };

    handleReset = id => {
        this.setState({ [id]: null });
    };

    render() {
        const { playerOne, playerTwo } = this.state;

        return (
            <>
                <Instructions />
                <div className="players-container">
                    <h1 className="center-text header-lh">Players</h1>
                    <div className="row space-around">
                        {playerOne === null ? (
                            <PlayerInput
                                label="Player One"
                                onSubmit={player =>
                                    this.handleSubmit('playerOne', player)
                                }
                            />
                        ) : (
                            <PlayerPreview
                                username={playerOne}
                                label="Player One"
                                onReset={() => {
                                    this.handleReset('playerOne');
                                }}
                            />
                        )}

                        {playerTwo === null ? (
                            <PlayerInput
                                label="Player Two"
                                onSubmit={player =>
                                    this.handleSubmit('playerTwo', player)
                                }
                            />
                        ) : (
                            <PlayerPreview
                                username={playerTwo}
                                label="Player Two"
                                onReset={() => {
                                    this.handleReset('playerTwo');
                                }}
                            />
                        )}
                    </div>
                    {playerOne && playerTwo && (
                        <Link
                            className="btn dark-btn btn-space"
                            to={{
                                pathname: '/battle/results',
                                search: `?playerOne=${playerOne}&playerTwo=${playerTwo}`
                            }}
                        >
                            Battle
                        </Link>
                    )}
                </div>
            </>
        );
    }
}
