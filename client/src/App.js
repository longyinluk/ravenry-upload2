import React, { Component } from 'react';
import axios from 'axios'
import DefaultImg from './assets/placeholder.png'
import { storage } from './firebase-config.js'
import Images from './Images.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firebaseImage: DefaultImg
    }
  }

  setDefaultImage() {
    this.setState({
      firebaseImage: DefaultImg
    })
  }

  uploadImage = e => {
    let imageObj = {};

    let currentImageName = "firebase-image-" + Date.now();
    let uploadImage = storage.ref(`images/${currentImageName}`).put(e.target.files[0]);

    uploadImage.on('state_changed',
      (snapshot) => { console.log(snapshot) },
      (error) => {
        alert(error);
      },
      () => {
        storage.ref('images').child(currentImageName).getDownloadURL().then(url => {
          this.setState({
            firebaseImage: url
          });

          imageObj = {
            imageName: currentImageName,
            imageData: url
          };
          axios.post(`/image/uploadbase`, imageObj)
            .then((data) => {
              if (data.data.success) {
                alert("Image has been successfully uploaded using firebase storage");
              }
            })
            .catch((err) => {
              alert("Error while uploading image using firebase storage");
              this.setDefaultImage();
            });
        })
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Upload to Firebase</h1>
        <input type="file" onChange={this.uploadImage} />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Images />
      </div>
    );
  }
}

export default App;
