export type BlogType = {
  date: string
  excerpt: string
  title: string
  slug: string
  featuredImage?: {
    node?: {
      mediaDetails?: {
        sizes?: {
          sourceUrl: string
          width: number
          height: number
        }[]
      }
    }
  }
  categories?: {
    nodes: {
      name: string
      slug: string
    }[]
  }
  author?: {
    node?: {
      avatar?: {
        size?: string
        width?: number
        height?: number
        foundAvatar?: boolean
        url?: string
      }
      name?: string
    }
  }
}

export type AllPostsResponse = {
  posts: {
    nodes: BlogType[]
    pageInfo: {
      endCursor: string
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string
    }
  }
}

export type SinglePostResponse = {
  content: string
  date: string
  excerpt: string
  modified: string
  slug: string
  title: string
  featuredImage?: {
    node?: {
      mediaDetails?: {
        sizes?: {
          sourceUrl: string
          width: number
          height: number
        }[]
      }
    }
  }
  categories?: {
    nodes: {
      name: string
      slug: string
    }[]
  }
  author?: {
    node?: {
      avatar?: {
        url: string
      }
      name: string
    }
  }
}
