import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/service/data.service';
import { IDocument } from '../shared/interfaces';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})
export class DocumentsComponent implements OnInit {

    documents : IDocument[] = [];

    constructor(private dataService : DataService) { }

    ngOnInit() { 
        this.dataService.getDocuments()
            .subscribe((data: IDocument[]) => this.documents = data);
    }

}