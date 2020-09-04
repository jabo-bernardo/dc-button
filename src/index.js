import React from 'react';
import { render } from 'react-dom';
import Button from './components/Button';
import './styles/index.scss';

function App() {
	return (
		<div className='button-list'>
			<div className='group-button'>
				<p>{'<Button />'}</p>
				<Button>Default</Button>
			</div>
			<div className='group-button'>
				<p>{'<Button variant="outline"/>'}</p>
				<Button variant='outline'>Default</Button>
			</div>
			<div className='group-button'>
				<p>{'<Button variant="text"/>'}</p>
				<Button variant='text'>Default</Button>
			</div>
			<div className='group-button'>
				<p>{'<Button disableShadow/>'}</p>
				<Button disableShadow>Default</Button>
			</div>
			<div className='grid-2'>
				<div className='group-button'>
					<p>{'<Button disabled/>'}</p>
					<Button disabled>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button disabled variant="text"/>'}</p>
					<Button disabled variant='text'>Default</Button>
				</div>
			</div>
			<div className='grid-2'>
				<div className='group-button'>
					<p>{'<Button startIcon="local_grocery_store"/>'}</p>
					<Button startIcon='local_grocery_store'>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button endIcon="local_grocery_store"/>'}</p>
					<Button endIcon='local_grocery_store'>Default</Button>
				</div>
			</div>
			<div className='grid-3'>
				<div className='group-button'>
					<p>{'<Button size="sm"/>'}</p>
					<Button size='sm'>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button size="md"/>'}</p>
					<Button size='md'>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button size="lg"/>'}</p>
					<Button size='lg'>Default</Button>
				</div>
			</div>
			<div className='grid-4'>
				<div className='group-button'>
					<p>{'<Button color="default"/>'}</p>
					<Button color='default'>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button color="primary"/>'}</p>
					<Button color='primary'>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button color="secondary"/>'}</p>
					<Button color='secondary'>Default</Button>
				</div>
				<div className='group-button'>
					<p>{'<Button color="danger"/>'}</p>
					<Button color='danger'>Default</Button>
				</div>
			</div>
			<div className='footer'>
				<h3>Jabo @ Devchallenges.io</h3>
			</div>
		</div>
	)
}

render(<App />, document.querySelector('#root'));