import styled, { css } from "styled-components";
import { ReactComponent as Facebook } from "./facebook.svg";
import { ReactComponent as LinkedIn } from "./linkedin.svg";

export const Footer = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 200px;
    margin: 182px 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        grid-template-columns: 1fr;
        margin-top: 146px;
        gap: 60px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 96px;
        gap: 24px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        display: contents;
    }
`;

export const Header = styled.h2`
    margin: 0;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 50px;
    font-weight: 700;
    line-height: 1.05;
    color: ${({ theme }) => theme.footer.header};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 46px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 21px;
    }
`;

export const Paragraph = styled.p`
    line-height: 1.4;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        line-height: 1.2;
        letter-spacing: 0.01em;
    }
`;

export const ContactDetails = styled.dl`
    display: flex;
    align-items: center;
    gap: 100px;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        gap: 124px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        flex-direction: column;
        gap: 22px;
    }
`;

const Label = css`
    font-family: ${({ theme }) => theme.fonts.headers};
    color: ${({ theme }) => theme.footer.label};
    font-size: 14px;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 12px;
    }
`;

export const ContactLabel = styled.dt`
    ${Label}

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        text-align: center;
    }
`;

export const ContactValue = styled.dd`
    margin-left: 0;
    line-height: 1.4;
    border-bottom: 1px solid ${({ theme }) => theme.footer.underline};
    margin-top: 16px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 8px;
    }
`;

export const ContactLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.page.text};
`;

export const Socials = styled.div`
    display: flex;
    gap: 40px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-row: 4;
        gap: 32px;
        justify-content: center;
    }
`;

export const SocialLink = styled.a`
    width: 52px;
    height: 52px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 32px;
        height: 32px;
    }
`;

const SocialIcon = css`
    width: 100%;
    height: 100%;
`;

export const FacebookIcon = styled(Facebook)`
    ${SocialIcon}
`;

export const LinkedInIcon = styled(LinkedIn)`
    ${SocialIcon}
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 50px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-row: 3;
        gap: 30px;
        margin-bottom: 26px;
    }
`;

export const FormWrapper = styled.div`
    display: grid;
    gap: 60px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        gap: 50px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 30px;
    }
`;

export const FormLabel = styled.label`
    ${Label}
    display: grid;
    gap: 18px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        gap: 16px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        gap: 20px;
    }
`;

const InputBase = css`
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.footer.border};
    color: ${({ theme }) => theme.page.text};
    padding: 6px 1px 6px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-size: 18px;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 16px;
        line-height: 1.2;
        letter-spacing: 0.01em;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        padding-top: 4px;
        padding-bottom: 4px;
    }
`;

export const Input = styled.input`
    ${InputBase}
`;

export const TextArea = styled.textarea`
    ${InputBase}
    resize: vertical;
`;

export const FormButton = styled.button`
    align-self: flex-start;
    border: none;
    background-color: ${({ theme }) => theme.buttons.button};
    color: ${({ theme }) => theme.page.text};
    text-decoration: none;
    border-radius: 30px;
    padding: 14px 58px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: background 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.buttons.hover};
    }

    &:active {
        background-color: ${({ theme }) => theme.buttons.active};
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
        font-size: 15px;
    }

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        align-self: center;
        font-size: 13px;
        padding: 10px 55px;
    }
`;