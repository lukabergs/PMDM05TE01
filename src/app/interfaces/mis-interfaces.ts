export interface INoticias {
  status: string;
  totalResults: number;
  articles: INoticia[];
}

export interface INoticia {
  checked: boolean;
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

interface Source {
  id?: string;
  name: string;
}