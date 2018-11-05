import React from 'react';

import { Name, Versions, Container } from './elements';

export default function HelloWorld() {
    const username = process.env.USER || process.env.USERNAME;
    return (
        <Container>
            <h1>
                Hi <Name>{username}</Name>, are you ready?
            </h1>
            <div>
                <Versions>
                    React: <b>{React.version}</b> |
                    Electron: <b>{process.versions.electron}</b> |
                    Node: <b>{process.versions.node}</b> |
                    Chromium: <b>{process.versions.chrome}</b>
                </Versions>
            </div>
        </Container>
    );
};
