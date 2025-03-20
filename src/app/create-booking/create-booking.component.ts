import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  standalone: false,
  templateUrl: './create-booking.component.html',
  styleUrl: './create-booking.component.css'
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private bookingService:BookingService) { }

  booking: Booking = {
    id: 100,
    name: 'Your Name',
    roomNumber: 101,
    startDate: new Date("2021-01-01"),
    endDate: new Date("2021-01-03")
    }


  ngOnInit(): void {
    if(this.router.url != '/create') {
      var id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      var bookingById = this.bookingService.getBookingById(id);
      this.booking = bookingById;
    }

    
  }

  save(): void {

    var bookingById = this.bookingService.getBookingById(this.booking.id);

    if(bookingById == null || bookingById == undefined){
      this.bookingService.addBooking(this.booking);
    } else {
      this.bookingService.updateBooking(this.booking);
    }

    
    this.router.navigate(['/bookings']);
  }

  dateChanged(event: Event, isStart: boolean){
    var val = (event.target as HTMLInputElement).value;

    if(isStart){
      this.booking.startDate = new Date(val);
    }else {
      this.booking.endDate = new Date(val);
    }

  }

}
