import React, { Component } from "react";
import Loading from "./Loading";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default class NewsCollection extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=cbb690e572ee4068bbad801fbc35d38f&pagesize=20`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata.totalResults,
      loading: false,
      totalResults: parseddata.totalResults,
    });
  }

  Prepage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=cbb690e572ee4068bbad801fbc35d38f&page=${this.state.page - 1
      }&pagesize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  Nextpage = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=cbb690e572ee4068bbad801fbc35d38f&page=${this.state.page + 1
      }&pagesize=20`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: parseddata.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=cbb690e572ee4068bbad801fbc35d38f&page=${this.state.page + 1
      }&pagesize=20`;
    this.setState({ page: this.state.page + 1 });
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata.totalResults,
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center">Latest News</h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            style={{ display: "flex", flexDirection: "column-reverse" }}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={this.state.loading && <Loading />}
          >
            <div className="row align-self-stretch">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-3 my-3" key={element.url}>
                    <NewsCard
                      title={element.title}
                      description={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </InfiniteScroll>
        </div>
      </>
    );
  }
}
