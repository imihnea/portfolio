/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const PostCard = ({ data }) => (
  <article
    className="post-card"
    sx={{
      bg: "cardBg",
    }}
  >
    {data.frontmatter.featuredImage ? (
      <Link to={data.frontmatter.slug}>
        <GatsbyImage
          image={data.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.frontmatter.title + " - Featured image"}
          className="featured-image"
        />
      </Link>
    ) : (
      ""
    )}
    <div className="post-content">
      {data.frontmatter.category ? (
        <p className="eyebrow">{data.frontmatter.category}</p>
      ) : null}
      <h2 className="title">
        <Link
          to={data.frontmatter.slug}
          sx={{
            variant: "links.postLink",
          }}
        >
          {data.frontmatter.title}
        </Link>
      </h2>
      {data.frontmatter.description ? (
        <p className="description">{data.frontmatter.description}</p>
      ) : null}
      {data.frontmatter.stack && data.frontmatter.stack.length > 0 ? (
        <p className="stack-line">
          {data.frontmatter.stack.slice(0, 3).join(" · ")}
        </p>
      ) : null}
    </div>
  </article>
)

export default PostCard
