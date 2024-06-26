export interface Repository {
  name: string;
  description?: string;
  html_url: string;
  updated_at: Date;
  stargazers_count: number;
}

export interface RepositoryResponse {
  repositories: Repository[];
}
