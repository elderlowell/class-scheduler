import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  expandedTF = true;

  disabledTF = true;

  monday = [
    {
      name: 'Math',
      student: 'Emma',
      assignment: 'Assignment 7A',
      notes: ''
    },
    {
      name: 'Math',
      student: 'Andrew',
      assignment: 'Assignment 16B',
      notes: ''
    },
    {
      name: 'Science',
      student: 'Emma',
      assignment: 'One Small Square 14',
      notes: ''
    },
    {
      name: 'Writing',
      student: 'Andrew',
      assignment: 'Assignment 3B',
      notes: ''
    }
  ];

  tuesday = [
    {
      name: 'Math',
      student: 'Emma',
      assignment: 'Assignment 7B',
      notes: ''
    },
    {
      name: 'Math',
      student: 'Andrew',
      assignment: 'Assignment 16C',
      notes: ''
    },
    {
      name: 'Science',
      student: 'Emma',
      assignment: 'One Small Square 15',
      notes: ''
    },
    {
      name: 'Writing',
      student: 'Andrew',
      assignment: 'Assignment 3C',
      notes: ''
    }
  ];

  wednesday = [
    {
      name: 'Math',
      student: 'Emma',
      assignment: 'Assignment 7C',
      notes: ''
    },
    {
      name: 'Math',
      student: 'Andrew',
      assignment: 'Assignment 16D',
      notes: ''
    },
    {
      name: 'Science',
      student: 'Emma',
      assignment: 'One Small Square 16',
      notes: ''
    },
    {
      name: 'Writing',
      student: 'Andrew',
      assignment: 'Assignment 3D',
      notes: ''
    }
  ];

  thursday = [
    {
      name: 'Math',
      student: 'Emma',
      assignment: 'Assignment 7D',
      notes: ''
    },
    {
      name: 'Math',
      student: 'Andrew',
      assignment: 'Assignment 16E',
      notes: ''
    },
    {
      name: 'Science',
      student: 'Emma',
      assignment: 'One Small Square 17',
      notes: ''
    },
    {
      name: 'Writing',
      student: 'Andrew',
      assignment: 'Assignment 3E',
      notes: ''
    }
  ];

  friday = [
    {
      name: 'Math',
      student: 'Emma',
      assignment: 'Assignment 7E',
      notes: ''
    },
    {
      name: 'Math',
      student: 'Andrew',
      assignment: 'Assignment 16F',
      notes: ''
    },
    {
      name: 'Science',
      student: 'Emma',
      assignment: 'One Small Square 18',
      notes: ''
    },
    {
      name: 'Writing',
      student: 'Andrew',
      assignment: 'Assignment 3F',
      notes: ''
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
