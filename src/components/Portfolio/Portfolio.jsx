import React, { useEffect, useState } from 'react'
import './portfolio.scss'
import PortfolioList from '../PortfolioList/PortfolioList'
import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data'


function Portfolio() {

  const [selected, setSelected] = useState('featured')
  const [data, setData] = useState([])

  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'branding',
      title: 'Branding'
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio)
        break;
      case 'web':
        setData(webPortfolio)
        break;
      case 'mobile':
        setData(mobilePortfolio)
        break;
      case 'design':
        setData(designPortfolio)
        break;
      case 'branding':
        setData(contentPortfolio)
        break;

      default:
        setData(featuredPortfolio)
        break;
    }
  }, [selected])

  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((data) => (
          <div className="item">
            <img src={data.img} alt="" />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
