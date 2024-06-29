import { graphQLRequest } from './graphQLRequest'
import { BlogType, SinglePostResponse } from '@/types/blog'

async function getAllPosts(): Promise<BlogType[]> {
  const query = `
    query getAllPosts {
      posts {
        nodes {
          date
          excerpt
          title
          slug
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  sourceUrl
                  width
                  height
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  `

  const resJson = await graphQLRequest(query)

  if (!resJson || !resJson.data || !resJson.data.posts) {
    throw new Error('Invalid GraphQL response')
  }
  const allPosts: BlogType[] = resJson.data.posts.nodes
  console.log('This is all post', allPosts)
  return allPosts
}

async function getSinglePost(slug: string): Promise<SinglePostResponse> {
  const query = `
    query getSinglePost {
      post(id: "${slug}", idType: SLUG) {
        content(format: RENDERED)
        date
        excerpt(format: RENDERED)
        modified
        slug
        title(format: RENDERED)
        featuredImage {
          node {
            mediaDetails {
              sizes {
                sourceUrl
                width
                height
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
      }
    }
  `

  const resJson = await graphQLRequest(query)

  if (!resJson || !resJson.data || !resJson.data.post) {
    throw new Error('Invalid GraphQL response')
  }

  const singlePost: SinglePostResponse = resJson.data.post
  return singlePost
}

export { getAllPosts, getSinglePost }
