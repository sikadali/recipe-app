import './App.css';
import Axios from 'axios';
import { useState } from 'react';
import RecipeTile from './RecipeTile';

const APP_ID = '717f8b5a';
const APP_KEY = 'e54036985819b21aef605d6f6c9579b0';
const cuisineTypes = ["",
	'American',
	'Asian',
	'British',
	'Caribbean',
	'Central Europe',
	'Chinese',
	'Eastern Europe',
	'French',
	'Indian',
	'Italian',
	'Japanese',
	'Kosher',
	'Mediterranean',
	'Mexican',
	'Middle Eastern',
	'Nordic',
	'South American',
	'South East Asian'
];

function App() {
	const [ query, setQuery ] = useState('');
	const [ recipes, setRecipes ] = useState([]);
	const [ cuisineTypeLabel, setCuisineTypeLabel ] = useState("");

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=15&cuisineType=${cuisineTypeLabel}`;

	const getRecipes = async () => {
		let result = await Axios.get(url);
		setRecipes(result.data.hits);
		console.log(result.data);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		getRecipes();
	};

	const selectCuisineType = (e) => {
		setCuisineTypeLabel(e.target.value);
	}
	
	return (
		<div className="app">
			<h1>World Food Recipes</h1>
			<form className="app__searchForm">
				<input
					type="text"
					className="app__input"
					placeholder="enter some ingredient"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
				/>
				<input className="app__submit" type="submit" value="Search" onClick={onSubmit} />
				<select className="app__cuisineType" onClick={selectCuisineType}>
					{cuisineTypes.map( (type) => {
						return(
							<option>
								{type}
							</option>
						);
					})}
				</select>
			</form>

			<div className="app__recipes">
				{recipes.map((recipe) => {
					return <RecipeTile recipe={recipe} />;
				})}
			</div>
		</div>
	);
}

export default App;