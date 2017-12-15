import React from 'react';
import ProfilePhoto from './ProfilePhoto.jsx';


class BasicInfo extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          UserName:"",
          Email:"",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
          [name]: value
        });
    }
  
    handleSubmit(event) {
      event.preventDefault();

    }
    
    
    // async componentDidMount() {
    //     let username = localStorage.getItem("username");
    //     this.state.FirstName = username.FirstName;
    //     this.state.LsstName = username.LastName
    // }
  
    render() {
        return (
            <section id="basicinfo">
                <div className="container">
                    <div className="row">
                        <div className="photo col-lg-3  col-md-9 col-md-12">
                            <ProfilePhoto />
                        </div>
                        <div className="nameInfo col-lg-9 col-md-9 col-md-12">                        
                            <h2 className="row">
                                <input type="text" readonly="value" value="My basic profile" className="boldInput">  
                                </input>
                            </h2>
                            <br></br>
                            <div class="conter">
                                                        
                                <form onSubmit={this.handleSubmit}>
                                    <h6 className="bold leftMargin">User Name:</h6>
                                    <input className="leftMargin" name="UserName" type="text" value={this.state.UserName} onChange={this.handleChange}></input>
                                    <br></br>
                                    <br></br>
                                    <h6 className="bold leftMargin">Email:</h6>
                                    <input className="leftMargin" name="Email" type="text" value={this.state.Email} onChange={this.handleChange}></input>
                                    <br></br>
                                    <br></br>
                                    <input className="leftMargin" type="submit" value="Update"/>
                                </form>                        
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
export default BasicInfo;