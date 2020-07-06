import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles : [],
      key : '',
      searchValue : '',
    };
  }

  updateSearchValue(props) {
    this.setState(
      {searchValue : props.target.value}
    );
  }

  componentDidMount() {
    const key = 'd0c0f9ae66bf4ec69c4a71c94c2cc0f1';
    const url = 'http://newsapi.org/v2/top-headlines?country=in&apiKey=' + key;
    //var req = new Request(url);

    fetch(url).then(
      response => response.json()
    ).then(
      (data) => {
        this.setState(
          {articles : data.articles}
        );
        //console.log(this.state.articles);
      }
    );
  }

  handleClick (props) {
    const url = 'http://newsapi.org/v2/everything?' +
      'q=' + props +
      '&from=2020-07-06&' +
      'sortBy=popularity&' +
      'apiKey=d0c0f9ae66bf4ec69c4a71c94c2cc0f1';
    //var req = new Request(url);

    fetch(url).then(
      (response) => response.json()
    ).then(
      (data) => {
        this.setState(
          {articles : data.articles}
        );
        //console.log(this.state.articles);
      }
    );
  }

  render() {
    return (
      <div>
        <input type='text' placeholder='Search' value={this.state.searchValue} onChange={(val) => this.updateSearchValue(val)}></input>
        <button onClick={ () => this.handleClick(this.state.searchValue)}>Go!</button>
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <div>
                <img src={item.urlToImage} width="300"/>
              </div>
              <div>
                {item.title}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
