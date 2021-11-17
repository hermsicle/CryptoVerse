import React from 'react';
import Section from '../components/Section';
import Link from 'next/link'
import Image from 'next/image'

const News = ({ news }: any) => {
  console.log(news)
  // url
  // source
  // body 
  // tags
  // categories
  // source_info.name -> source name
  // source_info.img -> source image

  type sourceInfoType = {
    name: string,
    img: string
  }

  type ArticleTypes = {
    id: string
    url: string
    body: string
    tags: string
    categories: string
    source_info: sourceInfoType
    title: string,
  }

  return (
    <Section>
      <h2>Latest Crypto News</h2>
      <div className="news-container">
        {news?.map((article: ArticleTypes, i: number) => {
          const { id, url, title, body, tags, categories, source_info } = article
          return (
            <Link key={id} href={url} passHref>
              <a target="_blank">
              <div className="news-box">
                <h4 className="news-title"> {title} </h4>
                <div className="header-separation"></div>
                <p className="news-body"> {body === "" ? "Read More..." : body} </p>
                <div className="news-source">
                  <Image src={source_info.img} alt="icon" height="35" width="35" />
                  <p className="source-name"> {source_info.name} </p>
                </div>
                <div className="source-tags">
                  <p>Category: {categories}</p>
                </div>
              </div>
              </a>
            </Link>
          )
        })}
      </div>
    </Section>
  );
};

export default News;

const API_KEY = `&api_key=${process.env.NEXT_PUBLIC_API_KEY}`;
const API_URL = `https://min-api.cryptocompare.com/data/v2/news/?lang=EN${API_KEY}`

export const getStaticProps = async () => {
  const res = await fetch(API_URL)
  const {Data} = await res.json()

  return {
    props: {
      news: Data
    }
  }
}