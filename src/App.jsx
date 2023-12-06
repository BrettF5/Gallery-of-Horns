import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import hornAnimals from './data.json';
import Container from 'react-bootstrap/Container';


function App() {

    return (
        <Container>
        <Header title="Gallery of Horns" />
        <Gallery message="What's your favorite horned animal" hornAnimals={hornAnimals} />
        <Footer copyright="Brett Fort 2023" />
        </Container>
    );
}

export default App;

