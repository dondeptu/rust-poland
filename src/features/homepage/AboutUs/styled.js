import styled from "styled-components";
import { ReactComponent as ImageIcon } from "../../../common/image-icon.svg";

export const Paragraph = styled.p`
    line-height: 1.4;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
        letter-spacing: 0.01em;
        margin-bottom: 8px;
    }
`;

export const Image = styled.img`
    // TO DO: when I receive the picture
`;

export const NoImage = styled.div`
    width: 400px;
    height: 240px;
    background: ${({ theme }) => theme.noImageBackground};
    display: flex;
    align-items: center;
    justify-content: center;
    grid-column: 2;
    grid-row: 1 / 3;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        width: 348px;
        height: 204px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 100%;
        height: 178px;
        grid-column: initial;
        grid-row: inherit;
    }
`;

export const StyledImageIcon = styled(ImageIcon)`
    width: 62px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 48px;
    }
`;