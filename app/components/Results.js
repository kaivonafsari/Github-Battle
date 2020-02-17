import React, { useEffect, useReducer } from 'react';
import { battle } from './../utils/api';
import {
    FaCompass,
    FaBriefcase,
    FaUsers,
    FaUserFriends,
    FaCode,
    FaUser
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import Card from './Card';
import Loading from './Loading';
import Tooltip from './Tooltip';

import queryString from 'query-string';
import { Link } from 'react-router-dom';

const ProfileList = ({ profile }) => {
    return (
        <ul className="card-list">
            <li>
                <FaUser color="rgb(239, 115, 115)" size={22} />
                {profile.name}
            </li>
            {profile.location && (
                <li>
                    <Tooltip text="User's Location">
                        <FaCompass color="rgb(144, 115, 255)" size={22} />
                        {profile.location}
                    </Tooltip>
                </li>
            )}
            {profile.company && (
                <li>
                    <Tooltip text="User's Company">
                        <FaBriefcase color="#795548" size={22} />
                        {profile.company}
                    </Tooltip>
                </li>
            )}
            <li>
                <FaUsers color="rgb(129, 194, 245)" size={22} />
                {profile.followers.toLocaleString()} followers
            </li>
            <li>
                <FaUserFriends color="rgb(64, 183, 95)" size={22} />
                {profile.following.toLocaleString()} following
            </li>
        </ul>
    );
};

ProfileList.propTypes = {
    profile: PropTypes.object.isRequired
};

const Results = () => {
    const initialState = {
        winner: null,
        loser: null,
        error: null,
        loading: true
    };
    const reducer = (state, action) => {
        if (action.type === 'success') {
            return {
                winner: action.winner,
                loser: action.loser,
                error: null,
                loading: false
            };
        } else if (action.type === 'error') {
            state.error = action.error;
            return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const location = useLocation();
    const { playerOne, playerTwo } = queryString.parse(location.search);

    useEffect(() => {
        (async () => {
            try {
                const [winner, loser] = await battle([playerOne, playerTwo]);

                dispatch({
                    type: 'success',
                    winner,
                    loser,
                    error: null,
                    loading: false
                });
            } catch (err) {
                dispatch({ type: 'error', error: err, loading: false });
            }
        })();
    }, [playerOne, playerTwo]);

    const { loading, error, winner, loser } = state;

    if (loading) {
        return <Loading text="Battling" />;
    } else if (error) {
        return <p className="center-text error">{error}</p>;
    }

    const isTied = winner.score === loser.score;

    return (
        <>
            <div className="grid space-around container-sm">
                <Card
                    header={isTied ? 'Tie' : 'Winner'}
                    subHeader={`Score: ${winner.score.toLocaleString()}`}
                    avatar={winner.profile.avatar_url}
                    href={winner.profile.html_url}
                    name={winner.profile.login}
                >
                    <ProfileList profile={winner.profile} />
                </Card>
                <Card
                    header={isTied ? 'Tie' : 'Loser'}
                    subHeader={`Score: ${loser.score.toLocaleString()}`}
                    avatar={loser.profile.avatar_url}
                    href={loser.profile.html_url}
                    name={loser.profile.login}
                >
                    <ProfileList profile={loser.profile} />
                </Card>
            </div>
            <Link className="btn dark-btn btn-space" to="/battle">
                Reset
            </Link>
        </>
    );
};

export default Results;
