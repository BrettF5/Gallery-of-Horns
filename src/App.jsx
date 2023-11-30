import './App.css'
import Header from './components/Header'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
    return (
        <>
        <Header title="Gallery of Horns" />
        <Gallery />
        <Footer copyright="Brett Fort 2023" />
        </>
    );
}

export default App;

