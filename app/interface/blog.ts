export interface simpleBlogCard {
  title: string;
  overview: string;
  currentSlug: string;
  titleImage: any;
}

export interface fullBlog {
  title: string;
  currentSlug: string;
  categories: [Category];
  titleImage: any;
  content: any;
  _createdAt: string;
  _updatedAt: string;
}

export interface Category {
  name: string;
  relevance: number;
}

export interface CodeContainerProps {
  fileName: string;
  language: string;
  code: string;
}
