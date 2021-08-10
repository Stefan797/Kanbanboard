import { Component, OnInit } from '@angular/core';
import { CreateTicketComponent } from '../create-ticket/create-ticket.component';
// import {DragDropModule} from '@angular/cdk/drag-drop';
// import {CdkDragDrop, moveItemInArray, transferArrayItem} from  '@angular/cdk/drag-drop' ;
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem } from '@angular/cdk/drag-drop';
// import { type } from 'os';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  ideas = [
    // {
    // 'text': 'Idee 1',
    // 'background-color:': '#12abcd'
    // } 
  ];

  todo = [
   
  ];

  done = [
   
  ];

  review = [
    'Get up',
    'Brush teeth'
  ];


  // adjustwidth = true;
  // ticketText: any;

  constructor(public dialog: MatDialog) { }

  

  ngOnInit(): void {
    // let projectID = this.getProjectId(); // 12903jd01j80d21zu129n20hns10
    // this.firestore.get('/tasks', where('project', '==', projectID))
    // .subscribe(() => {
  
    // });
  }

  openDialog() {
    //this.dialog.open(CreateTicketComponent);
    const dialogRef = this.dialog.open(CreateTicketComponent);

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.ticketText = result;
      // console.log(result);
      this.ideas.push(result);
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  writtenedittask() {
    console.log('Task is edit!');
  }

  

  deleteTicket() {
    console.log('Ticket is delete !');
  }

  // changepriority(numberofpriority: , arr, pos) {
  //   console.log('ready ?');
  //   switch (numberofpriority) {
  //     case '1':
  //   arr[pos]['background-color'] =  '#8cb6ed';
  //         return '#8cb6ed';
  //     case '2':
  //         return '#b5c4b9';
  //     case '3':
  //         return '#e67e85';
  //     case '4':
  //         return '#e8d9d8';
  //   }
  // }


}







