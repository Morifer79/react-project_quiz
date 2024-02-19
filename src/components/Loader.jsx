import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  position: absolute;
  top: 41%;
  left: 41%;
`;

export const Loader = () => (
  <LoaderWrapper>
    <BarLoader color="#53bac4" height={9} speedMultiplier={1.1} width={288} />
    <br />
    <BarLoader color="#e0e022" height={8} speedMultiplier={1.4} width={288} />
    <br />
    <BarLoader color="#53bac4" height={6} speedMultiplier={1.3} width={288} />
    <br />
    <BarLoader color="#e0e022" height={5} speedMultiplier={1.2} width={288} />
    <br />
    <BarLoader color="#53bac4" height={4} speedMultiplier={1.5} width={288} />
    <br />
    <BarLoader color="#e0e022" height={3} speedMultiplier={1.5} width={288} />
  </LoaderWrapper>
);
