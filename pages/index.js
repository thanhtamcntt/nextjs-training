import React, { Component } from 'react';
import Link from 'next/link';
import Layout from '../components/MyLayout';
export default class App extends Component {
  static async getInitialProps({ query }) {
    let page = 1
    if (query.page != undefined && parseInt(query.page)) {
      page = query.page
    }

    const res = await fetch(`https://api.pokemontcg.io/v1/cards?page=${page}&pageSize=12`)
    let data = await res.json()
    data.page = page
    return data;
  }
  render() {
    return (
      <div className="container">
        <Layout />
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/about">About</Link>
          </li>
        </ul>
        <div className="columns">
          {this.props.cards.map((card, i) => (
            <div className="col-md-3" key={i}>
              <div
                style={{
                  margin: 10
                }}>
                <Link href={`/cards?id=${card.id}`}>
                  <img src={card.imageUrl} className="img-responsive" />
                </Link>
              </div>
            </div>
          ))}

        </div>
        <div className="divider"></div>
        <div className="container">
          <div className="float-left">
            <ul className="pagination">
              <li
                className={"page-item" + (this.props.page == 1)
                  ? 'active'
                  : ''}>
                <Link href={`/?page=1`}>1</Link>
              </li>
              <li
                className={"page-item" + (this.props.page == 2)
                  ? 'active'
                  : ''}>
                <Link href={`/?page=2`}>2</Link>
              </li>
              <li
                className={"page-item" + (this.props.page == 3)
                  ? 'active'
                  : ''}>
                <Link href={`/?page=3`}>3</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}