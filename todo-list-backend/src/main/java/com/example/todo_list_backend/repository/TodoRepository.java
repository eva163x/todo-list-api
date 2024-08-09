package com.example.todo_list_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.todo_list_backend.model.Todo;

public interface EmployeeRepository extends JpaRepository<Todo, Long> {

}
