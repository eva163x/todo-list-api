package com.example.todo_list_backend.controller;

import com.example.todo_list_backend.exception.ResourceNotFoundException;
import com.example.todo_list_backend.model.Todo;
import com.example.todo_list_backend.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("api/v1/todos")
public class TodoContoller {

    @Autowired
    TodoRepository todoRepository;

    @GetMapping
    public List<Todo> getAllTodos(){
        return todoRepository.findAll();
    }

    //create
    @PostMapping
    public Todo createTodo(@RequestBody Todo todo){
        return todoRepository.save(todo);
    }

    //read
    @GetMapping("{id}")
    public ResponseEntity<Todo> getTodoById(@PathVariable long id){
        Todo todo = todoRepository.findById(id).
                orElseThrow(() -> new ResourceNotFoundException("This to-do doesn't exist"));

        return ResponseEntity.ok(todo);
    }

    //update
    @PutMapping("{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable long id, @RequestBody Todo newTodo){
        Todo currentTodo = todoRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("This to-do doesn't exist"));

        currentTodo.setTitle(newTodo.getTitle());
        currentTodo.setCompleted(newTodo.isCompleted());

        todoRepository.save(currentTodo);

        return ResponseEntity.ok(currentTodo);
    }
}
