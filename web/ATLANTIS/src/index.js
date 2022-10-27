import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import AppWrapper from './AppWrapper';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

//import * as serviceWorker from './serviceWorker';
const cache = new InMemoryCache();
const client = new ApolloClient({
    uri: 'http://minikubehost:31002/SMGS-SERVICE/api/graphql',
	cache: cache,
});
ReactDOM.render(
	<HashRouter>
		<ApolloProvider client={client}><AppWrapper></AppWrapper></ApolloProvider>
		
	</HashRouter>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();
