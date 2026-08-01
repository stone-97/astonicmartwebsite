import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private firestore: Firestore) { }

  // ✅ This function sends quote to Firebase
  addQuote(data: any) {
    const quoteRef = collection(this.firestore, 'quotes');

    return addDoc(quoteRef, {
      ...data,
      createdAt: new Date(),
      status: 'pending'
    });
  }
}