import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills:any={
    technologies:[{name:"C#, Swift, Python",percent:90,remark:'very-good'}, {name:"Visual Basic, TI-Basic",percent:90,remark:'very-good'},{name:"ActionScript",percent:100,remark:'excellent'},{name:"PHP, JAVA, C++, C",percent:50,remark:'average'}, {name:"JavaScript, TypeScript, HTML5", percent:100,remark:'excellent'}],
    tools:[{name:"Git, Angular, React, .Net",percent:90,remark:'very-good'},{name:"Office, XCode, Visual Studio",percent:100,remark:'excellent'},{name:"Android Studio, Unity3D",percent:80,remark:'good'},{name:"MySQL, CoreData, MS Server",percent:90,remark:'very-good'},{name:"Docker, Kubernetes",percent:50,remark:'average'}],
    methodologies:[{name:"Problem-Solving, Leading",percent:100,remark:'excellent'},{name:"MVC, MVVM",percent:90,remark:'very-good'},{name:"UI design, Unit Testing",percent:90,remark:'very-good'},{name:"Agile, Scrum",percent:90,remark:'very-good'},{name:"Azure DevOps",percent:70,remark:'some-what-good'}]
  };

  constructor(private _translationLoaderService: TranslationLoaderService) {
    this._translationLoaderService.loadTranslations(english, french);
  }

  ngOnInit(): void {
  }

}

    
    
  
