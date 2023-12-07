import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import hornAnimals from './data.json';
import HornFormed from './components/HornedForm';
import Container from 'react-bootstrap/Container';


function App() {
    const [filteredBeasts, setFilteredBeasts] = useState(hornAnimals);
    const handleSelect = (numberHorns) => {
        let updatedBeasts;
        if (isNaN(numberHorns)) {
        updatedBeasts = hornAnimals;
        } else {
        updatedBeasts = hornAnimals.filter(
            (filterHorns) => filterHorns.horns === parseInt(numberHorns)
        );
        }
        setFilteredBeasts(updatedBeasts);
    };

    return (
        <Container>
        <Header title="Gallery of Horns" />
        <HornFormed onSelect={handleSelect} />
        <Gallery message="What's your favorite horned animal" animals={filteredBeasts} />
        <Footer copyright="Brett Fort 2023" />
        </Container>
    );
}

export default App;

