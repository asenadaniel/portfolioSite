import React from 'react'
import './portfoliolist.scss'

function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li className={active ? 'portfoliolist active' : 'portfoliolist'} onClick={() => setSelected(id)}>
      {title}
    </li>
  )
}

export default PortfolioList
