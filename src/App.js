import { Container, Statistic } from 'semantic-ui-react';
import './App.css';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <Statistic size="small">
        <DisplayBalance title="Your Balance" value="2550.53" size="small" />
      </Statistic>

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <EntryLine description="income" value="$10"/>
      <EntryLine description="income" value="$100" isExpense />

      <MainHeader title="Add new transaction" type="h3" />

      <NewEntryForm />
    </Container>
  );
}

export default App;
