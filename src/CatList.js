// write your CatList component here
import React from 'react';

export default class CatList extends React.Component {
    render(){
        return (
            <div>
                {this.props.catPics.map((pic, index) => {
                    return (
                    <div key={index}>
                        <img src={pic.url} alt="catPic" />
                    </div>
                    )
                })}
            </div>
        )
    }
}