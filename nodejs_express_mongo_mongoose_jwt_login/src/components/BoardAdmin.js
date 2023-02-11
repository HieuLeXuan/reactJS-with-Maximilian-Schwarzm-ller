import React, { useState, useEffect } from 'react';
import EventBus from '../common/EventBus';

import UserService from '../services/user.service';

const BoardAdmin = () => {
    const [content, setContent] = useState('');

    useEffect(() => {
        UserService.getAdminBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setContent(_content);

                if (error.response && error.response.status === 401) {
                    EventBus.dispatch('logout');
                }
            },
        );
    }, []);

    return (
        <div className="container">
            <div className="jumbotron">
                <h3>{content}</h3>
            </div>
        </div>
    );
};

export default BoardAdmin;