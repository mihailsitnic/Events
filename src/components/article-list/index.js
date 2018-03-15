import React, { Component } from 'react';
import Article from '../article';
import './styles.css';

const Articles = ({ articles }) => (
  <ul className="article-list">
      {articles.map((article) => {
          return <Article article = {article} key = {article.id} />
      })}
  </ul>
);

const byYear = articles => {
    return articles.reduce((result, article) => {
        const year = article.date.getFullYear();
        if (!result[year]) {
            result[year] = [];
        }
        result[year].push(article);
        return result
    }, {})
};

const filterArticles = (article, query) => article.title.toLowerCase().indexOf(query) !== -1;

const sortArticles = (a, b) => {
    return 0;
};

const byMonth = articles => {
    return articles.reduce((result, article) => {
        const { month, date, year } = article.date;
        if (!result[month]) {
            result[month] = []
        }
        result[month].push(article);
        return result;
    }, {})
};

class ArticleList extends Component {
    state = {
        search: '',
        eventsDate: true,
        evCan: false
    };

    updateSearch(e) {
        this.setState({search: e.target.value.substr(0, 20)});
        if (e.target.value !== '') {
            this.state.eventsDate = false
            this.state.evCan = true
        } else {
            this.state.eventsDate = true
            this.state.evCan = false
        }
    }

    render() {
        const articlesByYear = byYear(this.props.articles);
        const { eventsDate } = this.state;
        const { toggleDate, toggleSearch } = this.props

        // Filter Date
        const filterDate = toggleDate &&
        <section className="filter-date">
            <div className="filter-date-scope">
                <div className="row">
                    <div className="col-6 fdi-left">
                        <input
                          type="text"
                          className="filter-date__input"
                          placeholder="From" autoFocus />
                    </div>
                    <div className="col-6 fdi-right">
                        <input
                          type="text"
                          className="filter-date__input"
                          placeholder="Till"/>
                    </div>
                </div>
                <button className="filter-date__bt">Update Filter</button>
            </div>
        </section>

        // Search
        const search = toggleSearch &&
        <section className="search">
            <div className="search-scope">
                <input
                  type="text"
                  className="search-scope__input"
                  placeholder="..."
                  value = {this.state.search}
                  onChange = {this.updateSearch.bind(this)} autoFocus />
                  <button className="search-scope__bt">Search</button>
            </div>
        </section>

        const t = Object.keys(articlesByYear).map(year => {
            const a = articlesByYear[year].sort(sortArticles).filter(article => filterArticles(article, this.state.search));

            return (
              <div className="events-articles" key={year}>
                  <div className = {this.state.evCan ? "events-canopy--active" : "events-canopy"}>&nbsp;</div>
                  <h3 className = {eventsDate ?
                      "events__date" :
                      "events__date--active"}>
                      {year}
                  </h3>
                  <Articles articles={a} />
              </div>
            )
        });

        return (
          <section className="events">
              <div className="wrapper">
                  {filterDate}
                  {search}
                  {t}
              </div>
          </section>
        )
    }
}

export default ArticleList;
