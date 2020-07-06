const path = require("path")
const slash = require("slash")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(
    `
      {
        allContentfulTeam {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )
    .then(result => {
      if (result.errors) {
        console.log("errors!!", result.errors)
      }

      const teamTemplate = path.resolve("./src/templates/team.js")
      // edges a an array of nodes that's why we can use forEach
      result.data.allContentfulTeam.edges.forEach(team => {
        createPage({
          path: `/teams/${team.node.slug}`,
          component: slash(teamTemplate),
          context: {
            slug: team.node.slug,
          },
        })
      })
    })
    .catch(err => console.log("nooooo error", err))
}
