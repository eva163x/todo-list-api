package com.example.todo_list_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.todo_list_backend.model.Todo;

public interface TodoRepository extends JpaRepository<Todo, Long> {
//all crud operations go here
}
