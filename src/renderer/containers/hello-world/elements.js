import styled from 'styled-components';
import { EDEADLK } from 'constants';

export const Versions = styled.p`
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Name = styled.span`
    text-transform: capitalize;
    color: ${props => props.theme.colors.primary};
`;
