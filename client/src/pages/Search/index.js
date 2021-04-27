import React, { Component } from 'react';
import NavBar from "../../components/Navbar";
import Search from "../../components/Search";
import Footer from "../../components/Footer";




export default class SearchPage extends Component {
    render() {
        return (
            <div>
              <NavBar />
              <Search />
              <Footer />
            </div>
        )
    }
}