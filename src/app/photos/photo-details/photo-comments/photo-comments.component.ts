import { FormBuilder } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId: number;
  comments$: Observable<PhotoComment[]>;
  constructor(
    private photoService: PhotoService,
    private photoBuilder: FormBuilder
  ) { }
  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);

  }

}
