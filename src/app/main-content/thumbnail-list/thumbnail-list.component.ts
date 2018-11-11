import { Component, OnInit, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as $ from 'jquery';
@Component({
  selector: 'app-thumbnail-list',
  templateUrl: './thumbnail-list.component.html',
  styleUrls: ['./thumbnail-list.component.scss']
})
export class ThumbnailListComponent implements OnInit {
  listImages: any[];

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFireDatabase,
    private renderer2: Renderer2,
    private el: ElementRef) { }

  ngOnInit() {
    this.getFileUploads(5).snapshotChanges().subscribe(listImages => {
      this.listImages = listImages;
      setTimeout(() => {
        // tslint:disable-next-line:max-line-length
        const carouselItem = this.el.nativeElement.childNodes[0].childNodes[0].childNodes[0].childNodes[0].childNodes[1].childNodes[0].childNodes[0].childNodes[1];
        this.renderer2.addClass(carouselItem, 'active');
      }, 0);
    });
  }

  getFileUploads(numberItems): AngularFireList<any> {
    return this.db.list('/', ref =>
      ref.limitToLast(numberItems));
  }

  onChangeCarousel(e) {

  }
}
