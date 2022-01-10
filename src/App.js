import { Container, Grid, Header, Segment, Statistic } from 'semantic-ui-react';
import './App.css';

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,500.53</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>A</Grid.Column>
            <Grid.Column>B</Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  );
}

export default App;
