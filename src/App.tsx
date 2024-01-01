import React from 'react';
import { TodoApp } from './components/TodoApp';
import { TodoProvider } from './providers/TodoProvider';
import { FormProvider } from './providers/FormProvider';

export const App: React.FC = () => (
  <TodoProvider>
    <FormProvider>
      <TodoApp />
    </FormProvider>
  </TodoProvider>
);
