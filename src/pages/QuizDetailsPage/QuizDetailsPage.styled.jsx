import { theme } from 'components/theme';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled(NavLink)`
  block-size: 500px;
  inline-size: 300px;
  margin-inline: auto;

  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 0px 30px;
  outline: 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  @media screen and (min-width: 768px) {
    block-size: 550px;
    inline-size: 700px;
  }

  @media screen and (min-width: 1200px) {
    block-size: 600px;
    inline-size: 1000px;
  }
`;

export const Wrapper = styled.div`
  block-size: 130px;
  inline-size: 280px;
  padding: 5px 10px;
  margin-inline: ${theme.spacing(5)};

  position: relative;
  top: 10px;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 30px 0px 0px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 768px) {
    inline-size: 680px;
  }

  @media screen and (min-width: 1200px) {
    inline-size: 980px;
  }
`;

export const DownWrapper = styled.div`
  padding: 5px 10px;
  block-size: 340px;
  inline-size: 280px;

  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0px 0px 0px 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: absolute;
  transform: translate(10px, 20px);

  span {
    padding-inline-end: ${theme.spacing(90)};

    color: transparent;
    transition: color ${theme.transition};
  }
  @media screen and (min-width: 768px) {
    block-size: 390px;
    inline-size: 680px;
  }

  @media screen and (min-width: 1200px) {
    block-size: 430px;
    inline-size: 980px;
  }
`;

export const BtnBack = styled(NavLink)`
  margin-inline-start: auto;
  padding: ${theme.spacing(4)};

  inline-size: 160px;
  display: block;
  text-align: center;
  transform: translateY(-20px);
  background-image: linear-gradient(
    to right,
    ${theme.colors.bottle} 0%,
    ${theme.colors.sunny} 51%,
    ${theme.colors.bottle} 100%
  );
  background-size: 200% auto;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 6px;
  transition: background-position ${theme.transition}, color ${theme.transition},
    box-shadow ${theme.transition};

  &:hover {
    background-position: right center;
    color: ${theme.colors.light};
    box-shadow: 0 0 13px 3px;
  }
`;

export const ExampleDiv = styled.div`
  padding: 80px 0 0 20px;
  color: #2d2294;
`;
