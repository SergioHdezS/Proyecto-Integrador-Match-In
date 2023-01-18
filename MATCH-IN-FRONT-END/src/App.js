import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, HomeLog, LoginPage, AboutUs, CreateMatch, Post, TeamProfile, UserProfile, HistorialPartidosPage, ListaPartidosPage, Usuario, Perfil, } from "./pages";
import Registro from "./pages/Registro";

const App = () => {
	return (
		<BrowserRouter>
			{/* Vamos a tener distintas rutas */}
			<Routes>
				{/* Especificamos cada ruta */}
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<Registro />} />
				<Route path="/home" element={<HomeLog />} />
				<Route path="/Usuario" element={<Usuario />} />
				<Route path="/partidos" element={<ListaPartidosPage />} />
				<Route path="/historial" element={<HistorialPartidosPage />} />
				<Route path="/perfiles" element={<Perfil />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/create-match" element={<CreateMatch />} />
				<Route path="/post" element={<Post />} />
				<Route path="/team-profile" element={<TeamProfile />} />
				<Route path="/user-profile" element={<UserProfile />} />

			</Routes>
		</BrowserRouter>
	);
};

export default App;

