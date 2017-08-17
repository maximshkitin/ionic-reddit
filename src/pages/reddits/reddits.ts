import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RedditService } from "../../app/services/reddits.service";

import { DetailsPage } from "../details/details";

@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html',
})
export class RedditsPage implements OnInit {
  category: any;
  limit: any;
  sorting = 'newest';
  postItems: any;
  isListed = true;

   @ViewChild('sortingSelect', {read: ElementRef}) sortingSelect: ElementRef;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }

  ngOnInit() {
    this.getPosts(this.category, this.limit);
  }

  getDefaults() {
    if(!localStorage.getItem('category'))
      this.category = "sports";
    else 
      this.category = localStorage.getItem('category')

    if (!localStorage.getItem('limit'))
      this.limit = 10;
    else 
      this.limit = localStorage.getItem('limit')
  }

  getPosts(category, limit) {
    switch (this.sorting) {
      case 'likes':
        this.redditService.getPosts(category, limit).subscribe( resp => {
          this.postItems = resp.data.children.sort((a,b) => {
              return b.data.score - a.data.score;
            })
        });
        break;
      case 'comments':
        this.redditService.getPosts(category, limit).subscribe( resp => {
          this.postItems = resp.data.children.sort((a,b) => {
              return b.data.num_comments - a.data.num_comments;
            })
        });
        break;
    
      case 'newest':
        this.redditService.getPosts(category, limit).subscribe( resp => {
          this.postItems = resp.data.children.sort((a,b) => {
              return b.data.created - a.data.created;
            })
        });
        break;
    }
  }

  isURL(str) {
    var pattern = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    return pattern.test(str);
  }


  openPostDetail(data: any) {
    this.navCtrl.push(DetailsPage, {data: data})
  }

  updatePosts() {
    this.getPosts(this.category, this.limit);
  }

  openSelect(){
    this.sortingSelect.nativeElement.click()
  }

  changePostsAlignment(){
    this.isListed = !this.isListed;
  }
}
