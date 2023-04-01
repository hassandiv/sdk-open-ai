type Nullable<T> = T | null;

declare type Permission = {
  id: string;
  object: string;
  created: number;
  allow_create_engine: boolean;
  allow_sampling: boolean;
  allow_logprobs: boolean;
  allow_search_indices: boolean;
  allow_view: boolean;
  allow_fine_tuning: boolean;
  organization: string;
  group: Nullable<number>;
  is_blocking: boolean;
};

export declare type Model = {
  id: string;
  object: string;
  owned_by: string;
  permission: Permission[];
};

export declare type ChatResponse = {
  id: string;
  object: string;
  created: number;
  owned_by: string;
  permission: Permission[];
  root: string;
  parent: Nullable<number>;
};

export declare type ChatRequest = {
  model: string;
  messages: {
    role: string;
    content: string;
  }[];
};
