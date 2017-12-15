import React from 'react';
import fetch from 'isomorphic-fetch';
import request from 'superagent';
import '../style/css/AddComment.css';
var FormData = require('form-data');

class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.movie,
            movieId: "",
            rating: "",
            content: "",
            username: localStorage.getItem("username"),
            userid: localStorage.getItem("userid"),
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentWillMount() {
        var movieId = window.location.pathname.split('/')[2];
        fetch("http://localhost:3001/movie/getMovieById/" + movieId)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .catch((e) => {
            console.log(e);
        })
        .then((message) => {
            console.log(message);
            this.setState({
                movieId: movieId,
                movie: {
                    category: message.category,
                    commentNum: message.commentNum,
                    description: message.description,
                    directors: message.directors.split(','),
                    name: message.name,
                    poster: message.poster,
                    rating: message.score,
                    screenshots: message.screenShots,
                    starring: message.stars.split(','),
                    watchedUsers: message.watchedUsers,
                    wishingUsers: message.wishingUsers,
                    screenplay: message.writers.split(','),
                    year: message.year
                }
            })
        })

    }

    handleInput(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        var AddComment = new FormData();
        var dt = new Date();

        AddComment.append('userId', this.state.userid);
        AddComment.append('movieId', this.state.movieId);
        AddComment.append('username', this.state.username);
        AddComment.append('content', this.state.content);
        AddComment.append('rating', this.state.rating);
        AddComment.append('date', dt.toLocaleDateString());

        console.log(this.state.movie);

        request.post('http://localhost:3001/comment/')
        .send(AddComment)
        .end((err, resp) =>{
            if (resp.body.success == false) 
            { 
              console.log("internal error:");
              console.error(err);
              console.error(resp);
            }
            else{
              console.log(resp);
            }
        })
    }

    render() {
        return (
            <div className="modal fade product_view" id="product_view">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <a href="#" data-dismiss="modal" className="className pull-right"><i class="material-icons">clear</i></a>
                        <h3 className="modal-title">Comment And Rate</h3>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 product_img">
                                <img src={this.state.movie.poster} className="img-responsive"/>
                            </div>
                            <div className="col-md-6 product_content">
                                <h4><span>{this.state.movie.name}</span></h4>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="row lead">
                                        {/* <div id="stars-existing" className="starrr" data-rating='4'></div> */}
                                            <br/>
                                        </div>
                                        <input name="rating" id="count-existing" placeholder="Rating" value={this.state.rating} onChange={this.handleInput}  />
                                    <textarea name="content" rows="4" cols="50" placeholder="Comment" value={this.state.content} onChange={this.handleInput}/>
                                    <div className="space-ten"></div>
                                    <div className="btn-ground">
                                        <button type="submit" className="btn btn-primary">SUBMIT</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default AddComment;