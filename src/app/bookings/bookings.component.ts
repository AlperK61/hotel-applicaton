import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-bookings',
  standalone: false,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit {

  constructor(private bookingService:BookingService) { }

  bookings : Booking[] = [];

  ngOnInit() {
    this.bookings = this.bookingService.getBookings();
  }

  deleteBooking(booking: Booking) : void{
    this.bookingService.deleteBooking(booking);	
  }

}
