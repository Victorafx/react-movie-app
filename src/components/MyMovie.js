import React from 'react';
import axios from 'axios';

class MyMovie extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            poster: '',
            comment: '',
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      submitForm(e) {
        e.preventDefault();
        const url = 'https://post-a-form.herokuapp.com/api/movies/';
        axios.post(url, this.state)
      .then(res => res.data)
      .then(res => {
        alert(`Film ajouté, id: ${res.id} !`);
      })
      .catch(e => {
        console.error(e);
        alert(`Erreur lors de l'ajout d'un film: ${e.message}`);
      });
      }
    render() {
        return(
            <div className="FormEmployee">
        <h1>Saisie d'un film</h1>
      
        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="name">Nom du film</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
      
            <div className="form-data">
              <label htmlFor="poster">Poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
      
            <div className="form-data">
              <label htmlFor="comment">Comment</label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                rows="4" cols="50"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
        </fieldset>
    </form>
</div>      
        )
    }
}

export default MyMovie;
