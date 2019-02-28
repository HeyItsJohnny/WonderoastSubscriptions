import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "angularfire2/auth";
import { AlertController } from '@ionic/angular';

export interface OrderHeader {
  id?: string;
  OrderType: string;
  Email: string;
  PhoneNo: string;
  ShipToName: string;
  ShipToAddress1: string;
  ShipToAddress2: string;
  ShipToCity: string;
  ShipToState: string;
  ShipToZipCode: string;
  BillToName: string;
  BillToAddress1: string;
  BillToAddress2: string;
  BillToCity: string;
  BillToState: string;
  BillToZipCode: string;
  Status: string;
  Notes: string;
  NumberOfProducts: number;
  Subtotal: number;
  Shipping: number;
  Tax: number;
  TotalVAT: number;
  CreatedAt: number;
  UpdatedAt: number;
}

export interface OrderLines {
  id?: string;
  ItemNo: string;
  ItemDescription: string;
  Quantity: string;
  RoastType: string;
  UnitOfMeasure: string;
  UnitPrice: number;
  LineAmount: number;
}

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor(
    private db: AngularFirestore,
    public alertController: AlertController) { }
}
