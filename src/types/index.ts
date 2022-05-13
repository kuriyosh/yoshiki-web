export type Note = {
  title: string
  updateDate: string
  template: string
  image: string
}

export type Blog = {
  title: string
  date: string
  template: string
  image: string
  tags: string[]
}

export type App = {
  date: string
  title: string
  template: string
  image: string
  appUrl?: string
  githubUrl?: string
  blogUrl?: string
}
