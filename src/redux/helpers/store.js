import { configureStore } from '@reduxjs/toolkit';
import heroes from '../../components/HeroesList/HeroesSlice';
import filters from '../../components/HeroesFilters/FiltersSlice';

const stringMiddleware = () => (next) => (action) => {
	if (typeof action === 'string') {
		return next({
			type: action
		});
	}
	return next(action);
};

const store = configureStore({
	reducer: { heroes, filters },
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== 'production'
});

export default store;