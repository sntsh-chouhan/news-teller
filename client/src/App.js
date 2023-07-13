import {Box , styled} from '@mui/material';


// Components
import Header from './components/header';
import InfoHeader from './components/InfoHeader';
import Articles from './components/Articles';

const Container = styled(Box)`
    width: 70%;
    margin: 40px auto 0 auto;
`;

function App() {
  return (
    <div>
        <Header/>
        <Container>
            <InfoHeader/>
            <Articles/>
        </Container>
        
        
    </div>
  );
}

export default App;
