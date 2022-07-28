import Navigation from './components/Navigation';

import './components/netflix-clone_assets/normalize.css';

import Billboard from './components/Billboard';

import Title from './components/Titles';

import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Billboard />
            <Title />
            <Footer/>
        </div>
    );
}

export default App;
