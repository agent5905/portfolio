import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { projectsEn} from '../api/projectsEn';
import { projectsFr} from '../api/projectsFr';

import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects:any[]=projectsEn;
  venobox: any;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, french);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.projects=projectsEn;
      }
      else{
        this.projects=projectsFr;
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    
    this.onMouse("portfolio-link", "portfolio-img");
    this.onMouse("audioStream-link", "audioStream-img");
    this.onMouse("tagdesigner-link", "tagdesigner-img");
    this.onMouse("abcmouse-link", "abcmouse-img");
    this.onMouse("catan-stats-link", "catan-stats-img");
    this.onMouse("instawinner-link", "instawinner-img");
    this.onMouse("stablediffusion-link", "stablediffusion-img");
    this.onMouse("pebble-link", "pebble-img");
    this.onMouse("survivor-link", "survivor-img");
    this.onMouse("arduino-link", "arduino-img");
    this.onMouse("countdown-link", "countdown-img");
    this.onMouse("b3-calc-link", "b3-calc-img");
    this.venobox = $('.venobox');
    this.venobox.venobox();
  }

  detailOnClick(project: any) {
    this.projects.filter(item=>item.detailIsDisplayed && item.id!=project.id).map(elem=>elem.detailIsDisplayed=false);
    project.detailIsDisplayed=!project.detailIsDisplayed;
  }

  onMouse(idLink: String, idImage: String) {
    $('#' + idLink).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );

    $('#' + idImage).on("mouseenter", function () {
      $('#' + idImage).css("opacity", "0.3");
      $('#' + idLink).css("opacity", "1");
    }).on('mouseleave', function () {
      $('#' + idImage).css("opacity", "1");
      $('#' + idLink).css("opacity", "0");
    }
    );
  }
}
