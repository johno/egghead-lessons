import React from 'react'
import Slugger from 'github-slugger'
import {Link} from 'gatsby'

const slugger = new Slugger()

export default ({ headings }) => (
  <ul>
    {headings
      .filter(heading => heading.depth !== 1)
      .map(heading => (
      <li key={heading.value}>
        <Link
          to={'#' + slugger.slug(heading.value)}
        >
          {heading.value}
        </Link>
      </li>
    ))}
  </ul>
)

