import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input
				className='ma3 pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='Search Pokemon' 
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;