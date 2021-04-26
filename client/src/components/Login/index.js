import React, { Component } from 'react'
import API from "../../utils/API.js";
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
    constructor(props) {
        super(props);
        // localStorage.setItem("test", 11);
        this.state = {
            email: "",
            password: "",
            redirect: null
            //create the state variable to email and password
            //create a handleinput change methods so that it will update the state
            //make the input fields react controlled
            //handle from submit method, will fire when someone logs in
            // in the form submit method makes sure it is going to backend with a post req /login
        }
    }

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;

        // Updating the input's state
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = async (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        console.log(`Hello ${this.state.email} ${this.state.password}`);
        console.log(this.state)
        // this.setState({
        //   email: "",
        //   password: ""
        // });
        // API.postLoginRequest(this.state)
        // .then(res => {
        //     console.log(res);
        //     // return <Redirect to="/creatorPage" />;

        // });
        try {
            await API.postLoginRequest(this.state)
            this.setState({
                redirect: "/creatorPage"
            })

        } catch (error) {


        }
        // await API.postLoginRequest(this.state)

        // .then(res =>{
        //     // console.log(res.data.token)
        //     const token = res.data.token;
        //     console.log(token)
        //     localStorage.setItem("accessToken", token );
        //     console.log("Getting AccessToken", localStorage.getItem("accessToken"));

        //     // API.getCreatorProfile(token)
        //     // .then(res=>{
        //     //     console.log("hello");
        //     //     console.log(res);
        //     //     if(res.status === 200){
        // this.setState({
        //     redirect: "/creatorPage"
        // })
        //     //     }

        //     // })
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
    };

    render() {
        if (this.state.redirect) {
            return < Redirect to={this.state.redirect} />

        }
        return (
            <div className="flex justify-center bg-gradient-to-r from-blue-100 to-blue-300 login-wrapper border-gray-400 border-solid">
                <div className="border-4 p-8 rounded-lg m-4 ">
                    <h1 className="flex justify-center text-3xl font-bold mb-4">Please Log In</h1>

                    <form>
                        <label>
                            <p className="flex justify-center text-lg p-4">Email</p>
                            <input className="flex justify-center p-2 m-4"
                                value={this.state.email}
                                name="email"
                                onChange={this.handleInputChange}
                                type="text"
                                placeholder="Email Address"
                            />
                        </label>
                        <label>
                            <p className="flex justify-center text-lg">Password</p>
                            <input className="flex justify-center p-2 m-4"

                                value={this.state.password}
                                name="password"
                                onChange={this.handleInputChange}
                                type="password"
                                placeholder="Password"
                            />
                        </label>
                        <div className="flex justify-center">
                            <button className="flex justify-center py-4 px-4 m-4 bg-blue-800 hover:bg-blue-500 text-white rounded mx-10 border-solid border-1 focus:ring-blue-900 focus:ring-opacity-50 hover:shadow-inner shadow-2xl" onClick={this.handleFormSubmit}>Enter</button>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}
