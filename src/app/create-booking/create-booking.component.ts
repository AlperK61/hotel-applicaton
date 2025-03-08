import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { Bookings } from '../mock-bookings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booking',
  standalone: false,
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css'
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router) { }

  booking: Booking = {
    id: 100,
    name: 'Your Name',
    roomNumber: 101,
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-01-03")
    }


  ngOnInit(): void {
  }

  save(): void {
    Bookings.push(this.booking);
    this.router.navigate(['/bookings']);
  }


}
