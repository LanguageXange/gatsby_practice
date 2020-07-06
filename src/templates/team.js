import React from "react"
import { graphql } from "gatsby"

const Team = ({ data }) => (
  <div style={{ backgroundColor: "lightblue" }}>
    <h1>{data.team.teaminfo.name}</h1>
    <h3>{data.team.teaminfo.league}</h3>
  </div>
)

export default Team

// a variable called slug which is a String
// rename contentfulTeam to team for convenience to access it above
export const pageQuery = graphql`
  query($slug: String!) {
    team: contentfulTeam(slug: { eq: $slug }) {
      slug
      teeball
      coed
      coaches
      numberplayer
      teaminfo {
        name
        sport
        league
      }
    }
  }
`
