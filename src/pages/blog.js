import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data }) => (
  <Layout>
    <SEO title="blog" />
    <h1>My blog post</h1>

    {/* {data.allMarkDownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h3> {post.node.frontmatter.title}</h3>
        <small>Author:{post.node.frontmatter.author}</small>
        <br />
        <small>Date:{post.node.frontmatter.date}</small> <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
      </div>
    ))} */}

    <Link to="/">Back to Home Page</Link>
  </Layout>
)

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           id
//           frontmatter {
//             path
//             title
//             date
//             author
//           }
//         }
//       }
//     }
//   }
// `

export default Blog
