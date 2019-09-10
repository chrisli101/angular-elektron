import { Component, OnInit } from '@angular/core';
export interface Worklist {
  isChecked: boolean;
  title: string;
  date: Date;
  receiver: string;
  sender: string;
  attachements: number
}

const ELEMENT_DATA: Worklist[] = [
  {isChecked: true, title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true, title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},
  {isChecked: true,title: 'Rechnung 4711', date: new Date(), receiver: 'office@receiver.company.com', sender: 'system@sender.company.com', attachements: 2},

];
@Component({
  selector: 'app-clientworklist',
  templateUrl: './clientworklist.component.html',
  styleUrls: ['./clientworklist.component.scss']
})
export class ClientworklistComponent implements OnInit {
  displayedColumns: string[] = ['isChecked', 'Title', 'Date', 'Receiver', 'Sender', 'Attachements'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
