// Todo Types

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  categoryId?: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTodoRequest {
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: string;
  categoryId?: string;
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
  categoryId?: string;
}

export interface TodoCategory {
  id: string;
  name: string;
  color: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface TodoState {
  todos: Todo[];
  categories: TodoCategory[];
  isLoading: boolean;
  error: string | null;
  filter: TodoFilter;
}

export interface TodoFilter {
  status: 'all' | 'completed' | 'pending';
  priority?: 'low' | 'medium' | 'high';
  categoryId?: string;
  search?: string;
} 