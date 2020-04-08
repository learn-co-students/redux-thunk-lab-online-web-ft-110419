// write your CatList component here
import React,{Component} from 'react'

class CatList extends Component {
    renderPics(){
        
       return this.props.catPics.map((cat,i) =>{ return(<img key={i} src={cat.url} alt={cat.source_url} />)

        })
    }
    render(){
        return(
            <div>
                {this.renderPics()}
            </div>
            
        )
    }
}

export default CatList