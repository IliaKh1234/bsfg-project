interface Game {
  id: number; // id is a number, not string
  name: string;
  provider: string;
  identifier: string;
  type: number;
  demo: number;
  image: string;
  categories: string[]; // categories is an array of strings
}

interface Pagination {
  current_page: number;
  per_page: number;
  total_items: number;
  total_pages: number;
  has_next_page: boolean;
  has_prev_page: boolean;
  next_page: number | null;
  prev_page: number | null;
}

interface FiltersApplied {
  providers: string[];
  categories: string[];
  search: string;
}

interface ApiResponse<T> {
  data: T[];
  pagination: Pagination;
  filters_applied: FiltersApplied;
}

export type { Pagination, FiltersApplied, Game, ApiResponse };
