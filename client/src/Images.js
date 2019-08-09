import React, {Component} from 'react';
import axios from 'axios';

class Images extends Component {
    state = {
        images: []
    }

    componentDidMount(){
        axios.get(`/image/uploadbase`)
            .then(res => {
                console.log(res)
                this.setState({
                    images: [...res.data]
                })
            })
    }

    copyUrl(e){
        navigator.clipboard.writeText(e.target.src)
        alert('Image url copied!')
    }

    
    render() {
        const {images} = this.state;
        const imageList = images.length ? (
            images.map(image => 
            <span>
                <img onClick={this.copyUrl} style={{width: 150}} src={image.imageData} alt=""/>
            </span>
            )
        ) : (
            <div className="center">No images yet</div>
        )
        return (
            <div>
                <h1>Uploaded Images</h1>
                {imageList}
            </div>
        )
    }
}

export default Images;