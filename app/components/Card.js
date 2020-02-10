import React from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from './../context/theme';

export const Card = ({ header, subHeader, avatar, href, name, children }) => {
    return (
        <ThemeConsumer>
            {({ theme }) => {
                return (
                    <div className={`card bg-${theme}`}>
                        <h4 className="header-lg center-text">{header}</h4>
                        <img
                            className="avatar"
                            src={avatar}
                            alt={`Avatar for ${avatar}`}
                        />
                        {subHeader && (
                            <h4 className="center-text">{subHeader}</h4>
                        )}
                        <h2 className="center-text">
                            <a className="link" href={href}>
                                {name}
                            </a>
                        </h2>
                        {children}
                    </div>
                );
            }}
        </ThemeConsumer>
    );
};

Card.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string,
    avatar: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default Card;
