import React from 'react'

const CatList = (props) => {
	return (
		<div>
			{props.catPics.map(cat => <div key={cat.id}><img src={cat.url} alt="cat" /></div>)}
		</div>
	)
}


export default CatList 

// write your CatList component here