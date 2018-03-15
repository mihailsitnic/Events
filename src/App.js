import React, { Component, Fragment } from 'react';
import './normalize.css';
import ArticleList from './components/article-list';
import articles from './fixtures';
import Header from './components/header';
import Canopy from './components/canopy';
import NavBar from './components/nav-bar';
import Footer from './components/footer';

class App extends Component {
    state = {
        toggleDate: false,
        toggleSearch: false
    };

  render() {
      const app = this.state;
      if (app.toggleDate === true && app.toggleSearch === true) {
          app.toggleDate = false;
          app.toggleSearch = false;
      }
    return (
      <Fragment>
        <Header />
        <Canopy />
        <NavBar
            onDateActive = {this.handleDateActive.bind(this)}
            onSearchActive = {this.handleSearchActive.bind(this)} />
        <ArticleList
            toggleDate = {app.toggleDate}
            toggleSearch = {app.toggleSearch}
            articles = {articles} />
        <Footer />
      </Fragment>
    );
  }
  handleDateActive = toggleDate => this.setState({toggleDate: !this.state.toggleDate})
  handleSearchActive = toggleSearch => this.setState({toggleSearch: !this.state.toggleSearch})
}

export default App;
