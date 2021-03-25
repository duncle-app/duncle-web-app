import MUIButton from "@material-ui/core/Button";
import React from "react";
import styled from "styled-components";
import NavigationLink from "../../styles/NavigationLink";

interface Props {
  isAuthenticated: boolean;
  signOutHandler(props: any): any;
}

const Container = styled.div`
  position: absolute;

  @media (max-width: 768px) {
    right: 1em;
  }

  right: 2em;
  margin-top: 5px;
`;

const Button = styled(MUIButton)`
  color: white;
  border-color: white;
`;

export default ({ isAuthenticated, signOutHandler }: Props) => {
  return (
    <Container>
      {isAuthenticated ? (
        <Button variant="contained" onClick={signOutHandler}>
          Sign Out
        </Button>
      ) : (
        <NavigationLink toRoute="/">
          <Button variant="outlined">Not signed in</Button>
        </NavigationLink>
      )}
    </Container>
  );
};
