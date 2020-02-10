import React from 'react';

const withHover = (Component, propName = 'hovering') => {
    return class WithHover extends React.Component {
        state = {
            hovering: false
        };

        onMouseOver = () => {
            this.setState({ hovering: true });
        };

        onMouseOut = () => {
            this.setState({ hovering: false });
        };

        render() {
            const { hovering } = this.state;
            const props = {
                [propName]: hovering,
                ...this.props
            };
            return (
                <div
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                >
                    <Component {...props} />
                </div>
            );
        }
    };
};

export default withHover;
