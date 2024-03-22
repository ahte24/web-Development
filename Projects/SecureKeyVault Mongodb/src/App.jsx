import Footer from "./components/Footer";
import Manager from "./components/Manager";
import Navbar from "./components/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="main min-h-[82.9vh] ">
				<Manager />
			</div>
			<Footer />
		</>
	);
}

export default App;
