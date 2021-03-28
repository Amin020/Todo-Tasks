import { Injectable } from "@angular/core";
import { getAllToDos } from "../dummy-data/todos-data";

@Injectable()
export class TodoController {

    getAll(filters, onSuccess: (data) => void) {
        getAllToDos(filters).subscribe(res => {
            onSuccess(res);
        });
    }

    MakeToDoDone(todoId) {

    }
}